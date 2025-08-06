"use strict";
const toNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        const parsed = parseFloat(value);
        if (isNaN(parsed)) {
            throw new Error("Giá trị không phải là số hợp lệ");
        }
        return parsed;
    }
    throw new Error("Giá trị không phải là số hoặc chuỗi");
};
// Các hàm toán học cơ bản
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0)
        throw new Error("Không thể chia cho 0.");
    return a / b;
}
// Lũy thừa
function power(base, exponent) {
    return Math.pow(base, exponent);
}
// Căn bậc n
function sqrt(base, root) {
    if (root === 0)
        throw new Error("Không thể lấy căn bậc 0.");
    return Math.pow(base, 1 / root);
}
// Giai thừa
function factorial(n) {
    if (n < 0)
        throw new Error("Không thể tính giai thừa số âm.");
    if (n !== Math.floor(n))
        throw new Error("Giai thừa chỉ tính cho số nguyên.");
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// DOM Elements
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");
function handleOperation(operation) {
    errorDiv.textContent = "";
    try {
        const res = operation();
        resultDiv.textContent = "Kết quả: " + res.toString();
    }
    catch (err) {
        errorDiv.textContent = err.message;
    }
}
// Gắn sự kiện nút
document.getElementById("add").onclick = () => handleOperation(() => add(toNumber(input1.value), toNumber(input2.value)));
document.getElementById("subtract").onclick = () => handleOperation(() => subtract(toNumber(input1.value), toNumber(input2.value)));
document.getElementById("multiply").onclick = () => handleOperation(() => multiply(toNumber(input1.value), toNumber(input2.value)));
document.getElementById("divide").onclick = () => handleOperation(() => divide(toNumber(input1.value), toNumber(input2.value)));
document.getElementById("power").onclick = () => handleOperation(() => power(toNumber(input1.value), toNumber(input2.value)));
document.getElementById("sqrt").onclick = () => handleOperation(() => sqrt(toNumber(input1.value), toNumber(input2.value)));
document.getElementById("factorial").onclick = () => handleOperation(() => factorial(toNumber(input1.value)));
