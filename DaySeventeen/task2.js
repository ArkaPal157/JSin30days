// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Test cases
  console.log("Fibonacci(0):", fibonacci(0));   // 0
  console.log("Fibonacci(5):", fibonacci(5));   // 5
  console.log("Fibonacci(7):", fibonacci(7));   // 13
  