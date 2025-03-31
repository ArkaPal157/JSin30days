// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}
repeatFunction(() => console.log("radheradhe"),9);

/*
function repeatFunction(func, n, ...args) {
    for (let i = 0; i < n; i++) {
        func(...args); // Pass additional arguments to the function
    }
}

repeatFunction(console.log, 5, "radheradhe");
*/