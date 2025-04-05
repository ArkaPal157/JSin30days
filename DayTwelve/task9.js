// Task 9: Try-Catch with Async Function and Fetch
// Create an async function that uses fetch to request data from an invalid URL.
// Wrap the fetch call in a try-catch block to handle potential errors.
// Log a detailed error message in the catch block.

async function getData() {
    try {
      const response = await fetch("https://invalid-url.example");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("Error occurred:", err.message);
    }
  }
  
  getData();
  