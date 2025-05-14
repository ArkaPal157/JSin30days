//Task 1: Inspect the _proto_ Property
//Access the _proto_ property of a simple object.
//Question: What does it reference? What methods are available through this prototype?

let obj = { name: "Alice" };

console.log(obj.__proto__);
console.log(typeof obj.__proto__.toString); // function
