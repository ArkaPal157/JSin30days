// Task 1: Make a Simple GET Request using fetch()
// Use fetch() to request data from a public API
// Log the raw response and the parsed JSON response.
// Understand and explain what fetch() returns and what .json() does.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log("Raw response:", response); // Response object
    return response.json(); // Convert to JSON
  })
  .then(data => {
    console.log("Parsed JSON:", data); // JSON data
  })
  .catch(error => console.error("Error:", error));

// Explanation:
// fetch() returns a Promise that resolves to a Response object
// .json() returns another Promise that resolves to parsed JSON content
