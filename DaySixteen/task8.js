// Task 8: Create a memoized version of factorial function using closure.

function memoizedFactorial() {
    const cache = {};

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        if (n in cache) return cache[n];
        cache[n] = n * factorial(n - 1);
        return cache[n];
    }

    return factorial;
}

const factorial = memoizedFactorial();
console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720 (reuses cached result of factorial(5))
