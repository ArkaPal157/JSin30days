// Task 10: Higher-order function to apply two functions sequentially
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
