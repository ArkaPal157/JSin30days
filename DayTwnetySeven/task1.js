// Task 1 Question:
// a. One that logs to the console
// b. One that modifies a global variable
// c. One that only calculates and returns a value
// Question: Which are pure? Which cause side effects? Why are side effects discouraged in functional programming?

// a. Impure - Causes side effect (console output)
function logMessage(msg) {
  console.log(msg);
}

// b. Impure - Modifies external state (global variable)
let count = 0;
function incrementGlobalCount() {
  count += 1;
}

// c. Pure - Depends only on input, no side effects
