// Task 4: Chained Promises vs setInterval
// Create a chain of Promise.then() and add a setInterval that logs every 100ms.
// Observe how micro-tasks are prioritized over macro-tasks.

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
    return 'data';
  })
  .then((res) => {
    console.log('Promise 2');
    return res;
  })
  .then((res) => {
    console.log('Promise 3');
  });

setInterval(() => {
  console.log('Interval');
}, 100);
