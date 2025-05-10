// Task 11: Solve Knapsack Problem Using Dynamic Programming
// Write a function to solve the knapsack problem using dynamic programming.
// Log the maximum value that can be obtained.

function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            values[i - 1] + dp[i - 1][w - weights[i - 1]],
            dp[i - 1][w]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    return dp[n][capacity];
  }
  
  console.log("Knapsack Max Value:", knapsack([1, 3, 4, 5], [150, 200, 300, 350], 7)); // Output: 500
  