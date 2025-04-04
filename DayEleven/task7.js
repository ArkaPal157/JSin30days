//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  fetchData();
  