// Task 9: Validate a Simple Password
// Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character).
// Log whether the password is valid.

function validatePassword(password) {
  // Creates a regular expression to validate the password
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
  // Tests the password against the regex
  const isValid = regex.test(password);
  // Logs the result
  console.log("Password is valid:", isValid);
}

// Example usage
validatePassword("Passw0rd!");
