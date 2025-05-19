// Task 4: Malformed JSON Handling
// Simulate a fetch request that returns invalid JSON.
// Try to parse using .json() and handle the exception.

const malformedJSON = new Response("This is not valid JSON", {
  headers: { "Content-Type": "application/json" }
});

malformedJSON.json()
  .then(data => console.log("Parsed data:", data))
  .catch(err => console.error("Caught JSON parse error:", err.message));

// This throws SyntaxError due to invalid JSON content.
