const toNumber = (value: number | string): number => {
    if (typeof value === 'number') {
        return value;
    } else if (typeof value === 'string') {
        const parsed = parseFloat(value);
        if (isNaN(parsed)) {
            throw new Error("Giá trị không phải là số hợp lệ");
        }
        return parsed;
    }
    throw new Error("Giá trị không phải là số hoặc chuỗi");
}


// Các hàm toán học cơ bản
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Không thể chia cho 0.");
  return a / b;
}

// Lũy thừa
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

// Căn bậc n
function sqrt(base: number, root: number): number {
  if (root === 0) throw new Error("Không thể lấy căn bậc 0.");
  return Math.pow(base, 1 / root);
}

// Giai thừa
function factorial(n: number): number {
  if (n < 0) throw new Error("Không thể tính giai thừa số âm.");
  if (n !== Math.floor(n)) throw new Error("Giai thừa chỉ tính cho số nguyên.");
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// DOM Elements
const input1 = document.getElementById("input1") as HTMLInputElement;
const input2 = document.getElementById("input2") as HTMLInputElement;
const resultDiv = document.getElementById("result")!;
const errorDiv = document.getElementById("error")!;

function handleOperation(operation: () => number) {
  errorDiv.textContent = "";
  try {
    const res = operation();
    resultDiv.textContent = "Kết quả: " + res.toString();
  } catch (err) {
    errorDiv.textContent = (err as Error).message;
  }
}

// Gắn sự kiện nút
(document.getElementById("add") as HTMLButtonElement).onclick = () =>
  handleOperation(() => add(toNumber(input1.value), toNumber(input2.value)));

(document.getElementById("subtract") as HTMLButtonElement).onclick = () =>
  handleOperation(() => subtract(toNumber(input1.value), toNumber(input2.value)));

(document.getElementById("multiply") as HTMLButtonElement).onclick = () =>
  handleOperation(() => multiply(toNumber(input1.value), toNumber(input2.value)));

(document.getElementById("divide") as HTMLButtonElement).onclick = () =>
  handleOperation(() => divide(toNumber(input1.value), toNumber(input2.value)));

(document.getElementById("power") as HTMLButtonElement).onclick = () =>
  handleOperation(() => power(toNumber(input1.value), toNumber(input2.value)));

(document.getElementById("sqrt") as HTMLButtonElement).onclick = () =>
  handleOperation(() => sqrt(toNumber(input1.value), toNumber(input2.value)));

(document.getElementById("factorial") as HTMLButtonElement).onclick = () =>
  handleOperation(() => factorial(toNumber(input1.value)));
