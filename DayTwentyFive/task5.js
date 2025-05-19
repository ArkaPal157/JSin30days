// Task 5: Same Request with Both APIs
// Perform a GET request to the same URL using both XMLHttpRequest and fetch().
// Log response data and compare syntax and flow.

const url = 'https://jsonplaceholder.typicode.com/posts/1';

// fetch version
fetch(url)
  .then(res => res.json())
  .then(data => console.log("fetch():", data));

// XMLHttpRequest version
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log("XMLHttpRequest:", JSON.parse(xhr.responseText));
  } else {
    console.error("XHR Error:", xhr.status);
  }
};
xhr.onerror = () => console.error("XHR Network Error");
xhr.send();

// Fetch is simpler, Promise-based, and more modern.
