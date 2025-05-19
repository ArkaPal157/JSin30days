// Task 2: Handle Errors Gracefully
// Modify the code to handle HTTP and network errors.
// Try fetching from a non-existent endpoint.
// Log different types of errors (e.g., 404, TypeError).

fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // Handles HTTP errors like 404
    }
    return response.json();
  })
  .then(data => console.log("Data:", data))
  .catch(error => console.error("Caught error:", error.message));
