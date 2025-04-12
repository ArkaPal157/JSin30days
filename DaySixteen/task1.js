// Task 1: Write a function that returns another function which accesses a variable from the outer function.

function outerFunction() {
    const outerVariable = "Hello from outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const resultFunc = outerFunction();
resultFunc(); // Output: Hello from outer function
