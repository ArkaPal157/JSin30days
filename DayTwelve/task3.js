// Task 3: Execution Flow Observation
// Construct a script that includes a try-catch block and a finally block.
// Log messages within each block (try, catch, and finally) to observe the order of execution.

try {
    console.log("In try block");
    throw new Error("Oops!");
  } catch (e) {
    console.log("In catch block");
  } finally {
    console.log("In finally block");
  }
  