// Task 8: Match Word at the End of a String
// Write a regular expression to match a word only if it is at the end of a string.
// Log the matches.

function matchWordAtEnd(text) {
  // Create a regular expression to match a word at the end
  const regex = /\w+$/;
  // Use match() to find the match
  const match = text.match(regex);
  // Log the match
  console.log("Word at End:", match ? match[0] : "No match");
}

// Example usage
matchWordAtEnd("Welcome to JavaScript");
