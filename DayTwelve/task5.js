// Task 5: Custom Error for Validation
// Create a function that validates user input (e.g., checking for an empty string).
// If the validation fails, throw a custom error object with a descriptive message.
// Utilize a try-catch block to handle the custom error and provide appropriate feedback.

class EmptyInputError extends Error {
    constructor(message) {
      super(message);
      this.name = "EmptyInputError";
    }
  }
  
  function validateInput(input) {
    if (!input) {
      throw new EmptyInputError("Input cannot be empty");
    }
    return "Valid input!";
  }
  
  try {
    console.log(validateInput(""));
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
  