"use strict";
let userName = "chung";
let age = 25;
let job = "developer";
const displayUserInfo = (name, age, job) => {
    document.write(`User Info: Name - ${name}, Age - ${age}, Job - ${job}`);
    return `User Info: Name - ${name}, Age - ${age}, Job - ${job}`;
};
displayUserInfo(userName, age, job);
