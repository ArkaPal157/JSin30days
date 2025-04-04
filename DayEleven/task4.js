//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
function waitForIt() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Done waiting!"), 1000);
    });
  }
  
  async function run() {
    const result = await waitForIt();
    console.log(result);
  }
  
  run();
  