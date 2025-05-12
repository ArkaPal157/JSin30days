// Task 4: Match Sequences of One or More Digits
// Write a regular expression to match all sequences of one or more digits in a string.
// Log the matches.

function matchDigitSequences(text) {
  // Creates a regular expression to match sequences of one or more digits
  const regex = /\d+/g;
  // Uses match() to find all matches
  const matches = text.match(regex);
  // Logs the matches
  console.log("Digit Sequences:", matches);
}

// Example usage
matchDigitSequences("Order numbers: 12345, 67890, and 24680.");
