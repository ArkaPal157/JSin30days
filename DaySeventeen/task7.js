// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
  }
  
  // Test cases
  console.log("Index of 7 in [1,3,5,7,9]:", binarySearch([1,3,5,7,9], 7)); // 3
  console.log("Index of 2 in [1,3,5,7,9]:", binarySearch([1,3,5,7,9], 2)); // -1
  