// Task 8 Question:
// Write a custom curry() function that transforms any function into curried form.
// Test it on different functions.
// Bonus: Try using Lodash’s _.curry and compare.
// Question: How does currying differ from partial application?

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) => curried(...args, ...next);
    }
  };
}

// Test
function addThree(a, b, c) {
  return a + b + c;
}

const curriedAddThree = curry(addThree);
console.log(curriedAddThree(1)(2)(3)); // 6
console.log(curriedAddThree(1, 2)(3)); // 6
