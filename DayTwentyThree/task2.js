//Task 2: Link Objects via _proto_
//Manually create two objects and link one as the prototype of the other using _proto_.
//Question: How does property access behave when a property is not found in the child object?


let parent = { greet: "Hello" };
let child = {};
child.__proto__ = parent;

console.log(child.greet); // "Hello"
console.log(child.hasOwnProperty("greet")); // false
