namespace Bai7 {
    class Account {
        public accountNumber: string;
        protected balance: number;
        protected history: string[];
        protected status: string;

        constructor(accountNumber: string, initialBalance: number) {
            this.accountNumber = accountNumber;
            this.balance = initialBalance;
            this.history = [];
            this.status = "active";
        }

        public deposit(amount: number): void {
            if (amount <= 0) {
                console.log("Số tiền nạp phải lớn hơn 0");
                return;
            }
            this.balance += amount;
            this.history.push(`Nạp: +${amount}, Số dư: ${this.balance}`);
        }

        public withdraw(amount: number): void {
            if (amount <= 0) {
                console.log("Số tiền rút phải lớn hơn 0");
                return;
            }
            if (amount > this.balance) {
                console.log("Số dư không đủ");
                return;
            }
            this.balance -= amount;
            this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
        }

        public showHistory(): void {
            console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
            this.history.forEach(h => console.log(h));
        }
    }

    class SavingAccount extends Account {
        public interestRate: number;

        constructor(accountNumber: string, initialBalance: number, interestRate: number) {
            super(accountNumber, initialBalance);
            this.interestRate = interestRate;
        }

        public withdraw(amount: number): void {
            if (amount <= 0) {
                console.log("Số tiền rút phải lớn hơn 0");
                return;
            }
            if (amount > this.balance) {
                console.log("Không thể rút quá số dư hiện tại");
                return;
            }
            this.balance -= amount;
            this.history.push(`Rút (SavingAccount): -${amount}, Số dư: ${this.balance}`);
        }
    }
    
    //bai8
    class CheckingAccount extends Account {
        public overdraftLimit: number;

        constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
            super(accountNumber, initialBalance);
            this.overdraftLimit = overdraftLimit;
        }

        public withdraw(amount: number): void {
            if (amount <= 0) {
                console.log("Số tiền rút phải lớn hơn 0");
                return;
            }
            if (amount > this.balance + this.overdraftLimit) {
                console.log(`Không thể rút quá hạn mức thấu chi (${this.overdraftLimit})`);
                return;
            }
            this.balance -= amount;
            this.history.push(`Rút (CheckingAccount): -${amount}, Số dư: ${this.balance}`);
        }
    }

    console.log("=== SavingAccount ===");
    let saving = new SavingAccount("123456", 1000, 0.05);
    saving.deposit(500);
    saving.withdraw(300);
    saving.withdraw(1500);
    saving.withdraw(1200);
    saving.showHistory();

    console.log("\n=== CheckingAccount ===");
    let checking = new CheckingAccount("654321", 500, 1000);
    checking.deposit(200);
    checking.withdraw(600); 
    checking.withdraw(1200); 
    checking.withdraw(800); 
    checking.showHistory();
}
