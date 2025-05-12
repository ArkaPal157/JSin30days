// Task 1: Match a Simple Pattern
// Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string).
// Log the matches.

function matchJavaScriptOccurrences(text) {
  // Creates a regular expression to match all occurrences of "JavaScript"
  const regex = /JavaScript/g;
  // Uses match() to find all matches
  const matches = text.match(regex);
  // Logs the matches
  console.log("Matches:", matches);
}

// Example usage
matchJavaScriptOccurrences("I love JavaScript. JavaScript is versatile.");
