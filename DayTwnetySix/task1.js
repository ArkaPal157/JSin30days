/*
Task 1: Observe Object References and Garbage Collection
- Create an object and assign it to a variable.
- Reassign the variable to null and explain when it's eligible for garbage collection.
- Use Chrome DevTools → Memory tab → Snapshots to observe the object before and after.
- Discussion: How does removing references impact memory?
*/

let person = { name: "Alice", age: 30 }; // Object created

console.log("Object created:", person);

// Reassign the reference
person = null; // Now eligible for garbage collection if no other references exist

console.log("Reference removed. Object is now eligible for garbage collection.");
