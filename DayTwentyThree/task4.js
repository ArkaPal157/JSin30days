//Task 4: Copy Properties with Object.assign()
//Use Object.assign() to copy properties from one object to another.
//Question: Does Object.assign() establish a prototype chain or just copy values?


let source = { skill: "JavaScript" };
let target = {};
Object.assign(target, source);

console.log(target.skill); // "JavaScript"
console.log(Object.getPrototypeOf(target) === source); // false
