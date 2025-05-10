// Task 7: Match Word at the Beginning of a String
// Write a regular expression to match a word only if it is at the beginning of a string.
// Log the matches.

function matchWordAtStart(text) {
  // Create a regular expression to match a word at the beginning
  const regex = /^\w+/;
  // Use match() to find the match
  const match = text.match(regex);
  // Log the match
  console.log("Word at Start:", match ? match[0] : "No match");
}

// Example usage
matchWordAtStart("Hello world!");
