// Task 9: Fetch with Request Headers and POST Body
// Use fetch() to make a POST request with JSON body and headers.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is the body content.',
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("POST response:", data))
  .catch(err => console.error("POST error:", err.message));
