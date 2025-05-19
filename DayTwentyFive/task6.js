// Task 6: Handling Responses and Errors
// Introduce an error (e.g., 404) in both implementations.
// Compare how error handling works between XMLHttpRequest and fetch().

const invalidURL = 'https://jsonplaceholder.typicode.com/invalid';

// fetch version with 404
fetch(invalidURL)
  .then(res => {
    if (!res.ok) throw new Error(`fetch() error: ${res.status}`);
    return res.json();
  })
  .catch(err => console.error(err.message));

// XMLHttpRequest version with 404
const xhr2 = new XMLHttpRequest();
xhr2.open("GET", invalidURL);
xhr2.onload = () => {
  if (xhr2.status !== 200) {
    console.error("XHR error:", xhr2.status);
  }
};
xhr2.onerror = () => console.error("XHR Network Error");
xhr2.send();

// fetch needs manual error check (res.ok).
// XHR gives status code directly.
