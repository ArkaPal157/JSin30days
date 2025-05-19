// Task 10: Chained Requests with Dependent Results
// Fetch user data from an API.
// Then fetch posts by that user using data from the first call.
// Chain .then() and observe promise resolution order.

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .then(user => {
    console.log("User:", user.name);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(res => res.json())
  .then(posts => {
    console.log(`Posts by user:`, posts);
  })
  .catch(err => console.error("Error in chaining:", err.message));
