// Task 8: Debouncing with Event Loop
// Implement a simple debounce function using setTimeout.
// Log when the function is actually executed vs when the event is triggered.

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedLog = debounce((message) => {
  console.log('Debounced Execution:', message);
}, 500);

console.log('User typing...');
debouncedLog('First input');

setTimeout(() => {
  console.log('User typing again...');
  debouncedLog('Second input');
}, 300);

setTimeout(() => {
  console.log('User stopped typing...');
}, 800);
