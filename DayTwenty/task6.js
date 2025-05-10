// Task 5: Implement Binary Search
// Implement the binary search algorithm to find a target value in a sorted array.
// Log the index of the target value.

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1; // Base case: not found
  
    const mid = Math.floor((start + end) / 2); // Middle index
  
    if (arr[mid] === target) return mid; // Found
    else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1); // Search left
    else return binarySearch(arr, target, mid + 1, end); // Search right
  }
  
  console.log("Binary Search:", binarySearch([2, 4, 6, 8, 10, 12], 10)); // Output: 4
  