// Task 9: Use reduce() to calculate the sum of all numbers in the array
let numbers = [0,1,2,3,4]
let sum = numbers.reduce((acc, currentval) => acc + currentval, 0);
console.log("Sum of Array Elements:", sum);
/*
let initialvalue=0
array.reduce((accumulator, currentvalue) => {logic}, initialvalue);

logic can be accumulator + currentvalue
initialvalue can be the starting value of accumulator
*/