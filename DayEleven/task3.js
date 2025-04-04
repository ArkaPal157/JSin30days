//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data fetched"), 1000);
    });
  }
  
  fetchData()
    .then((res) => {
      console.log(res); // First log
      return "Processing data";
    })
    .then((res) => {
      console.log(res); // Second log
      return "Finished";
    })
    .then((res) => console.log(res)); // Final log
  