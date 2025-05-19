// Task 3 Question:
// Write a function withLogging(fn) that wraps another function and logs when it starts and ends.
// How does this improve code reuse? Where have you seen higher-order functions in JavaScript before?

function withLogging(fn) {
  return function (...args) {
    console.log(`Calling ${fn.name}`);
    const result = fn(...args);
    console.log(`Finished ${fn.name}`);
    return result;
  };
}

// Example functions
function greet(name) {
  return `Hello, ${name}`;
}

const loggedGreet = withLogging(greet);
console.log(loggedGreet("Alice"));
