// Task 1: Global Execution Context
//Write a script with global variables and functions. Log the this keyword and check its value in the global context.
var globalVar = "I'm global";

function globalFunction() {
  return "I'm a global function";
}

console.log("Global this:", this); // In browsers, this refers to the window object
console.log("Global variable:", this.globalVar); // Works in browsers (not in strict mode or Node.js)
console.log("Global function:", this.globalFunction()); // Calls the function via global this
