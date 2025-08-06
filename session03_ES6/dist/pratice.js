"use strict";
//khai bao kieu du lieu enum
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "auto";
    SystemMode["MANUAL"] = "manual";
})(SystemMode || (SystemMode = {}));
const logMovement = (direction) => {
    return `Moving ${direction}`;
};
const setMode = (mode) => {
    return `System mode set to ${mode}`;
};
const processInput = (input) => {
    if (typeof input === "string") {
        return `Input is a string: ${input}`;
    }
    else if (typeof input === "number") {
        return `Input is a number: ${input}`;
    }
    else if (Array.isArray(input)) {
        return `Input is an array of length ${input.length}`;
    }
    else {
        return `Input is of type ${typeof input}`;
    }
};
const validataInput = (input) => {
    if (typeof input === "number") {
        console.log(`Valid number: ${input}`);
    }
    else {
        console.log(`loi`);
    }
};
const crash = (message) => {
    throw new Error(message);
};
//goi ham
logMovement("left");
logMovement("right");
setMode(SystemMode.AUTO);
setMode(SystemMode.MANUAL);
processInput(10);
try {
    //logic thanh cong
    crash("This is a crash message");
}
catch (errer) {
    //logic loi
    console.log(`Error`);
}
