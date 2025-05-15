// Task 5: Nested setTimeout and Promise
// Write a setTimeout inside a Promise and a Promise inside a setTimeout.
// Log messages in each and observe the execution order.

Promise.resolve().then(() => {
  console.log('Inside Promise');
  setTimeout(() => {
    console.log('setTimeout inside Promise');
  }, 0);
});

setTimeout(() => {
  console.log('Inside setTimeout');
  Promise.resolve().then(() => {
    console.log('Promise inside setTimeout');
  });
}, 0);
