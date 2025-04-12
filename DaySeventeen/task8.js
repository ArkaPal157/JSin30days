// Task 8: Write a recursive function to count the occurrences of a target element in an array.

function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) return 0;
    const match = arr[index] === target ? 1 : 0;
    return match + countOccurrences(arr, target, index + 1);
  }
  
  // Test cases
  console.log("Count of 2 in [2,3,2,4,2]:", countOccurrences([2,3,2,4,2], 2)); // 3
  console.log("Count of 5 in [1,2,3]:", countOccurrences([1,2,3], 5));         // 0
  