// Task 2 Question:
// Given a function that modifies its input array (e.g., pushes items), refactor it into a pure version.
// Challenge: Make the function return a new array instead of modifying the original.

const impurePush = (arr, item) => {
  arr.push(item); // Impure
  return arr;
};

const purePush = (arr, item) => {
  return [...arr, item]; // Pure
};
