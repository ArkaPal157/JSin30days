//Task 9: Access let/const in TDZ
//Write code that tries to access a let or const variable before it's declared. Log the error.
console.log(a); //  ReferenceError
let a = 10;

console.log(b); //  ReferenceError
const b = 20;
