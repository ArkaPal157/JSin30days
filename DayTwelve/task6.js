// Task 6: Promise Rejection Handling
// Construct a promise that resolves or rejects based on a random condition.
// Utilize the .catch() method to handle the rejection scenario and log a user-friendly message.

const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) resolve("Success!");
      else reject("Something went wrong.");
    }, 2000);
  });
  
  promise
    .then(msg => console.log(msg))
    .catch(err => console.log("Error:", err));
  