//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
function failNow() {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Something went wrong!"), 1000);
    });
  }
  
  async function handleError() {
    try {
      const result = await failNow();
      console.log(result);
    } catch (error) {
      console.log("Caught error:", error);
    }
  }
  
  handleError();
  