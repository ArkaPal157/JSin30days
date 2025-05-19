// Task 5 Question:
// Given an array of user objects, use filter() to get adults,
// map() to get their names, and reduce() to calculate total age.
// What are the advantages of these methods over for loops in terms of code readability and function purity?

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Eve", age: 17 }
];

const adults = users.filter(user => user.age >= 18);
const adultNames = adults.map(user => user.name);
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

console.log(adults);
console.log(adultNames);
console.log(totalAge);
