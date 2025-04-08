// Task 6: Calculate the factorial of a number using a do...while loop
let number = 6; // Change this value to calculate factorial of any number
let factorial = 1, k = number;
do {
    factorial *= k;
    k--;
} while (k > 0);
console.log(`Factorial of ${number} is ${factorial}`);