type status = "active" | "banned"

class Account {
    id: number;
    useName: string;
    passWord: string;
    isLogin: boolean;
    role: string;

    constructor(
        id: number,
        useName: string,
        passWord: string,
        isLogin: boolean,
        role: string,
    ) {
        this.id = id;
        this.useName = useName;
        this.passWord = passWord;
        this.isLogin = isLogin
        this.role = role;
    }

    logIn(): void {
        this.isLogin = true;
        if (this.isLogin) {
            console.log("đăng nhập thành công");

        } else {
            console.log("đăng nhập thất bại");
        }
    }
    logOut(): void {
        if (this.isLogin) {
            console.log("đăng xuất thành công");
            this.isLogin = false;
        }
    }
}

class UseAcc extends Account {
    status: status;
    constructor(id: number,
        useName: string,
        passWord: string,
        isLogin: boolean,
        role: string,
        status: status
    ) {
        super(id, useName, passWord, isLogin, role);
        this.status = status;
    }
    login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("đăng nhập thành công");
        } else if (this.status === "banned") {
            console.log("tài khoản bị khóa");
        } else {
            console.log("tài khoản ko tồn tại");

        }
    }
}

// bài 6
class AdminAcc extends Account {


    banUser(id: number, users: UseAcc[]): void {
        const user = users.find(u => u.id === id);
        if (user) {
            user.status = "banned";
            console.log("tài khoản bị khóa");
        } else {
            console.log("tài khoản không tồn tại");
        }




    }
}

const users: UseAcc[] = [
    new UseAcc(1, "john", "123456", false, "user", "active"),
    new UseAcc(2, "peter", "654321", false, "user", "active")
];

const admin = new AdminAcc(99, "admin", "admin123", false, "admin");

users[0].login(); 
users[1].login(); 


admin.banUser(2, users); 


users[1].login(); 
