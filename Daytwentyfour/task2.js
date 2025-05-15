// Task 2: Observe Asynchronous Behavior with setTimeout
// Write a script that logs three messages: one synchronously, one inside a setTimeout, 
// and one after a resolved Promise.
// Observe the order of log outputs and explain why it happens that way.

console.log("Synchronous log");

setTimeout(() => {
  console.log("setTimeout log");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise log");
});
