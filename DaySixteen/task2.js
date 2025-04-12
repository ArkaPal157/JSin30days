// Task 2: Create a closure that maintains a private counter and allows incrementing and getting the value.

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        getValue: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
