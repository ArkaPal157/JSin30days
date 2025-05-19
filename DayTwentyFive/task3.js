// Task 3: Parsing JSON vs Plain Text
// Fetch from a JSON API.
// Use .text() instead of .json() and log the result.
// Compare and explain the differences between .text() and .json().

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.text()) // Get raw text
  .then(text => {
    console.log("As text:", text);
    try {
      const json = JSON.parse(text); // Manually parse
      console.log("Parsed manually to JSON:", json);
    } catch (e) {
      console.error("Parsing error:", e);
    }
  });

// .text() returns raw response as string.
// .json() parses and returns JS object automatically.
