// Task 3: Implement Quicksort
// Implement the quicksort algorithm to sort an array of numbers in ascending order.
// Log the sorted array.

function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      // Divide elements into left and right based on the pivot
      if (arr[i] < pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log("Quicksort:", quickSort([7, 2, 1, 6, 8, 5, 3, 4]));
  