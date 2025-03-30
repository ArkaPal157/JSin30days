// Task 9: Higher-order function to call a function n times
function repeatFunction(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}