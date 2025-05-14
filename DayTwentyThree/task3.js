//Task 3: Create an Object with Object.create()
//Use Object.create() to create an object that inherits from a base object.
//Question: What is the prototype of the newly created object?

let base = { role: "admin" };
let user = Object.create(base);

console.log(user.role); // "admin"
console.log(Object.getPrototypeOf(user) === base); // true
