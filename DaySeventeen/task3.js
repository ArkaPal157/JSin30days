// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr, index = 0) {
    if (index >= arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
  }
  
  // Test cases
  console.log("Sum of [1, 2, 3, 4]:", sumArray([1, 2, 3, 4]));  // 10
  console.log("Sum of [10, 20, 30]:", sumArray([10, 20, 30]));  // 60
  