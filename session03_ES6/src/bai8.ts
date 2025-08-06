


const toNum = (value: number | string): number => {
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


const sum = (a: number | string, b: number | string): number => {
    return toNum(a) + toNum(b);
};

const subtraction = (a: number | string, b: number | string): number => {
    return toNum(a) - toNum(b);
};

const multiplication = (a: number | string, b: number | string): number => {
    return toNum(a) * toNum(b);
};

const division = (a: number | string, b: number | string): number => {
    const numB = toNum(b);
    if (numB === 0) throw new Error("Không thể chia cho 0");
    return toNum(a) / numB;
};




//gọi hàm

console.log(sum("10", "5"));       
console.log(sum("003", "2"));        
console.log(sum("3.14", "0.86"));  
console.log(sum("10abc", "2"));      
console.log(subtraction(10, "-5"));  
console.log(division("6", "0"));     
