// Task 7: Simulate API Calls with setTimeout and Promises
// Simulate two API calls:
// - One using setTimeout.
// - One using Promise.resolve().then().
// Log when each one starts and finishes. Show how the event loop processes them.

console.log('Start API call with setTimeout');

setTimeout(() => {
  console.log('Finished API call with setTimeout');
}, 1000);

console.log('Start API call with Promise');

Promise.resolve().then(() => {
  console.log('Finished API call with Promise');
});
