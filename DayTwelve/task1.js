// Task 1: Intentional Error Throwing
// Create a function that throws an error with an informative message.
// Wrap the function call in a try-catch block to catch the error and log an appropriate message to the console.

function throwError() {
    throw new Error("Something went wrong!");
  }
  
  try {
    throwError();
  } catch (err) {
    console.log("Caught error:", err.message);
  }
  