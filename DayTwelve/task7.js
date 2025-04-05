// Task 7: Try-Catch with Async Function
// Design an async function that attempts to fetch data using a promise.
// Wrap the promise call in a try-catch block to capture potential errors.
// Log an informative error message if the promise rejects.

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Server error"), 2000);
    });
  }
  
  async function loadData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (err) {
      console.log("Caught error:", err);
    }
  }
  
  loadData();
  