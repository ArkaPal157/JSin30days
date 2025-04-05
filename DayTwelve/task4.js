// Task 4: Custom Error Class
// Create a custom error class that inherits from the built-in Error class.
// This class should have a constructor to define a custom error name and message.
// Throw an instance of this custom error class in a function.
// Utilize a try-catch block to handle the custom error and log a specific message.

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  try {
    throw new ValidationError("Invalid input!");
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
  