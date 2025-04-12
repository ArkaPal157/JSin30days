// Task 7: Write a function that memoizes results of another function using closure.

function memoize(fn) {
    const cache = {};

    return function (x) {
        if (x in cache) {
            console.log("From cache");
            return cache[x];
        } else {
            const result = fn(x);
            cache[x] = result;
            return result;
        }
    };
}

function square(n) {
    return n * n;
}

const memoizedSquare = memoize(square);
console.log(memoizedSquare(4)); // Output: 16
console.log(memoizedSquare(4)); // Output: From cache, 16
