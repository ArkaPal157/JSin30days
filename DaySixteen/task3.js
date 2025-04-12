// Task 3: Write a function that generates unique IDs using closure to track the last ID.

function idGenerator() {
    let lastId = 0;

    return function () {
        lastId++;
        return lastId;
    };
}

const generateId = idGenerator();
console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2
