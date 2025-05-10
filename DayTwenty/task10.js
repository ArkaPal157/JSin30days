// Task 10: Solve Fibonacci Sequence Using Dynamic Programming
// Write a function to solve the Fibonacci sequence using dynamic programming.
// Log the Fibonacci numbers.

function fibonacciDP(n) {
    const fib = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; // Use previous two values
    }
  
    return fib[n];
  }
  
  console.log("Fibonacci (DP):", fibonacciDP(10)); // Output: 55
  