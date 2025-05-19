// Task 7: Abort a Slow Fetch Request
// Use AbortController to abort a delayed fetch.
// Log whether fetch was aborted and what error is thrown.

const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => {
  controller.abort(); // abort after 1s
}, 1000);

fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
  .then(res => res.json())
  .then(data => console.log("Data received:", data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.error("Fetch aborted");
    } else {
      console.error("Other error:", err.message);
    }
  });
