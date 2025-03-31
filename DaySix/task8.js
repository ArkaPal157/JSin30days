// Task 8: Use filter() to create a new array with only even numbers
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
let oddNumbers = numbers.filter(num => num % 2 !==0);
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
