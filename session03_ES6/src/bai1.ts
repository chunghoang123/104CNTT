    let userName: string = "chung";
    let age: number = 25;
    let job :string  = "developer";

    const displayUserInfo = (name: string, age: number, job: string): string => {
        document.write(`User Info: Name - ${name}, Age - ${age}, Job - ${job}`);
        return `User Info: Name - ${name}, Age - ${age}, Job - ${job}`;
    }

    displayUserInfo(userName, age, job);

    
