//khai bao kieu du lieu enum
enum SystemMode {
    AUTO = "auto",
    MANUAL = "manual",
}

type Direction = "up" | "down" | "left" | "right";
const logMovement = (direction: Direction): string => {
    return `Moving ${direction}`;
}
const setMode = (mode: SystemMode): string => {
    return `System mode set to ${mode}`;
}
const processInput = (input: any): any => {
    if (typeof input === "string") {
        return `Input is a string: ${input}`;
    } else if (typeof input === "number") {
        return `Input is a number: ${input}`;
    } else if (Array.isArray(input)) {
        return `Input is an array of length ${input.length}`;
    } else {
        return `Input is of type ${typeof input}`;
    }
}
const validataInput = (input: unknown) => {
    if (typeof input === "number") {
        console.log(`Valid number: ${input}`);
    } else {
        console.log(`loi`);
    }
};

const crash = (message: string): never => {
    throw new Error(message);


}


//goi ham
logMovement("left");
logMovement("right");

setMode(SystemMode.AUTO);
setMode(SystemMode.MANUAL);

processInput(10);

try {
    //logic thanh cong
    crash("This is a crash message");

} catch (errer) {
    //logic loi
    console.log(`Error`);
}