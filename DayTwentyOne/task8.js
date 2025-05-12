// Task 8: Match Word at the End of a String
// Write a regular expression to match a word only if it is at the end of a string.
// Log the matches.

function matchWordAtEnd(text) {
  // Creates a regular expression to match a word at the end
  const regex = /\w+$/;
  // Uses match() to find the match
  const match = text.match(regex);
  // Logs the match
  console.log("Word at End:", match ? match[0] : "No match");
}

// Example usage
matchWordAtEnd("Welcome to JavaScript");
