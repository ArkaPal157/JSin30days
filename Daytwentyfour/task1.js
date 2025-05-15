// Task 1: Understand Call Stack Execution
// Write a series of synchronous function calls (functionA -> functionB -> functionC) 
// and log when each function starts and ends.
// Log the order of execution to understand the LIFO behavior of the call stack.

function functionC() {
  console.log('Start functionC');
  console.log('End functionC');
}

function functionB() {
  console.log('Start functionB');
  functionC();
  console.log('End functionB');
}

function functionA() {
  console.log('Start functionA');
  functionB();
  console.log('End functionA');
}

functionA();
