/*
Task 2: Closures and Unintentional Retention
- Create a closure that captures a large object.
- Return a function from the closure but never use it.
- Analyze in DevTools if the large object is retained in memory.
- Explain: Why closures can lead to memory leaks?
*/

function createClosure() {
  const largeArray = new Array(1_000_000).fill("data"); // Simulating large memory usage

  return function inner() {
    // largeArray is still captured
    console.log("This is an unused closure");
  };
}

const unusedClosure = createClosure(); // Not used, but largeArray remains in memory
