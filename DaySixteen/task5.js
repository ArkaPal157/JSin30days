// Task 5: Create a loop that generates an array of functions where each logs its own index.

const functionArray = [];

for (let i = 0; i < 5; i++) {
    functionArray.push(function () {
        console.log(`Function ${i}`);
    });
}

functionArray[0](); // Output: Function 0
functionArray[3](); // Output: Function 3
