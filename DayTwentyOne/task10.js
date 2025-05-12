// Task 10: Validate a URL
// Write a regular expression to validate a URL.
// Log whether the URL is valid.

function validateURL(url) {
  // Creates a regular expression to validate the URL
  const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
  // Tests the URL against the regex
  const isValid = regex.test(url);
  // Logs the result
  console.log("URL is valid:", isValid);
}

// Example usage
validateURL("https://www.example.com/path");
