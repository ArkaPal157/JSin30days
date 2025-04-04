//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejected!");
    }, 2000);
  });
  
  promise.catch((error) => {
    console.log(error);
  });
  