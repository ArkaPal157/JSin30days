// Task 3: setTimeout vs Promise
// Write code that includes:
// - A setTimeout with 0ms delay.
// - A resolved Promise.
// - A synchronous console.log.
// Log outputs in each and understand the difference in execution order between 
// macro-tasks (like setTimeout) and micro-tasks (like Promise).

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('Synchronous');
