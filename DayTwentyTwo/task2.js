//Task 2: Observe Function Execution Context
//Create a function that declares its own variables and logs this and arguments. Compare this with the global context.
function testFunction(a, b) {
  var localVar = "Local to testFunction";

  console.log("Inside Function Context:");
  console.log("arguments:", arguments);
  console.log("this:", this); // In strict mode: undefined; in non-strict: window
}

testFunction(1, 2);
