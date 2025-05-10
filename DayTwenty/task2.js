// Task 2: Implement Selection Sort
// Implement the selection sort algorithm to sort an array of numbers in ascending order.
// Log the sorted array.

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      // Finds the index of the minimum element in the unsorted part
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swaps the current element with the minimum element found
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  
  console.log("Selection Sort:", selectionSort([5, 3, 8, 4, 2]));
  