// Task 4: Implement Linear Search
// Implement the linear search algorithm to find a target value in an array.
// Log the index of the target value.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1; // Not found
  }
  
  console.log("Linear Search:", linearSearch([10, 20, 30, 40], 30));
  