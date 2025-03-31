// Task 8: Function with default age value
function greet(name, age = 18) {
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(greet("Arka"));
console.log(greet("Arka",22));
