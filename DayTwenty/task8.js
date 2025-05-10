// Task 8: Rotate Array by k Positions
// Write a function to rotate an array by k positions.
// Log the rotated array.

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // In case k > n
    const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];
    return rotated;
  }
  
  console.log("Rotated Array:", rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
  