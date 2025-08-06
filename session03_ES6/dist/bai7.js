"use strict";
let str = "banana";
let newStr = "";
for (let i = 0; i < str.length; i++) {
    if (!newStr.includes(str[i])) {
        newStr += str[i];
    }
}
console.log(newStr);
