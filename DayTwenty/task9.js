// Task 9: Merge Two Sorted Arrays
// Write a function to merge two sorted arrays into one sorted array.
// Log the merged array.

function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
  
    // Compare and merge
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i++]);
      } else {
        merged.push(arr2[j++]);
      }
    }
  
    // Add remaining elements
    return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
  }
  
  console.log("Merged Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));
  