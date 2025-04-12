// Task 4: Create a closure that stores the user's name and returns a function to greet them.

function greetUser(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

const greet = greetUser("Alice");
greet(); // Output: Hello, Alice!
