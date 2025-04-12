// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArray(arr, index = 0) {
    if (index === arr.length - 1) return arr[index];
    return Math.max(arr[index], maxArray(arr, index + 1));
  }
  
  // Test cases
  console.log("Max of [3, 7, 1, 9]:", maxArray([3, 7, 1, 9]));   // 9
  console.log("Max of [5, 15, 25]:", maxArray([5, 15, 25]));     // 25
  