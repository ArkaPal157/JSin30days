// Task 3: Match Words Starting with a Capital Letter
// Write a regular expression to match all words in a string that start with a capital letter.
// Log the matches.

function matchCapitalizedWords(text) {
  // Create a regular expression to match words starting with a capital letter
  const regex = /\b[A-Z][a-zA-Z]*\b/g;
  // Use match() to find all matches
  const matches = text.match(regex);
  // Log the matches
  console.log("Capitalized Words:", matches);
}

// Example usage
matchCapitalizedWords("Alice and Bob are attending the JavaScript Conference.");
