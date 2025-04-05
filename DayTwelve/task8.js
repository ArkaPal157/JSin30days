// Task 8: Fetch Error Handling with .catch()
// Employ the fetch API to retrieve data from an invalid URL.
// Utilize the .catch() method to capture network or other errors that may occur.
// Log a clear error message to the console.

fetch("https://invalid-url.example")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Fetch failed:", error.message));
