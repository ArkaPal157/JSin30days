// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
const a= (x) => x*2
const b= (x) => x*3

console.log(applyFunctions(a,b,2));

/*
function applyFunctions(fn1, fn2) {
    return (value) => fn2(fn1(value)); // Return a function that takes 'value'
}

const a = (x) => x * 2;
const b = (x) => x * 3;

const double = applyFunctions(a, b); // Returns a function that expects a value
const triple = applyFunctions(b, a); // Returns a function that expects a value

console.log(double(5)); // (5 * 2) * 3 = 30
console.log(triple(5)); // (5 * 3) * 2 = 30
*/