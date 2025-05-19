// Task 8: Combine Fetch with AbortController in a Reusable Function
// Create a function that fetches data with timeout and abort logic.

function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  return fetch(url, { signal: controller.signal })
    .then(res => {
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.json();
    });
}

// Use the function
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 2000)
  .then(data => console.log("Result:", data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.error("Request timed out and aborted.");
    } else {
      console.error("Error:", err.message);
    }
  });
