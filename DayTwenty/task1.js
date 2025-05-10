// Task 1: Implement Bubble Sort
// Implement the bubble sort algorithm to sort an array of numbers in ascending order.
// Log the sorted array.

function bubbleSort(arr) {
    const n = arr.length;
    // Outer loop to go through the array multiple times
    for (let i = 0; i < n - 1; i++) {
      // Inner loop to compare adjacent elements
      for (let j = 0; j < n - 1 - i; j++) {
        // If the current element is greater than the next, swap them
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  console.log("Bubble Sort:", bubbleSort([5, 1, 4, 2, 8]));
  