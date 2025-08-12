"use strict";
class Account {
    constructor(id, useName, passWord, isLogin, role) {
        this.id = id;
        this.useName = useName;
        this.passWord = passWord;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        this.isLogin = true;
        console.log("Đăng nhập thành công");
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}
class UserAcc extends Account {
    constructor(id, useName, passWord, isLogin, role, status) {
        super(id, useName, passWord, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Tài khoản bị khóa");
        }
    }
}
const activeUser = new UserAcc(1, "john", "123456", false, "user", "active");
activeUser.login(); // Đăng nhập thành công
const bannedUser = new UserAcc(2, "peter", "654321", false, "user", "banned");
bannedUser.login(); // Tài khoản bị khóa
