let firstName: string = "chung";
let lastName: string = "nguyen";
firstName = "john";
lastName = "doe";

let newName = firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
console.log(newName); 