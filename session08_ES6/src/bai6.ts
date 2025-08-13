function findElement<T>(arr: T[], value: T): T | undefined {
    return arr.find(item => item === value);
}

console.log(findElement([1, 2, 3, 4], 3));         
console.log(findElement(["a", "b", "c"], "b"));  
console.log(findElement(["a", "b", "c"], "x"));   
