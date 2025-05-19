// Task 4 Question:
// Write a function that returns another function (e.g., makeMultiplier(factor) that returns x => x * factor).
// How does this enable configurability and reuse?

function makeMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
