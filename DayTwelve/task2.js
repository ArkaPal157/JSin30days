// Task 2: Division by Zero Check
// Design a function that divides two numbers.
// Within the function, check for division by zero and throw an error if encountered.
// Use a try-catch block to handle the potential error and provide a meaningful message.

function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 0));
  } catch (err) {
    console.log("Error:", err.message);
  }
  