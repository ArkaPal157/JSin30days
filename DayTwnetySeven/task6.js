// Task 6 Question:
// Combine filter, map, and reduce into a single pipeline to get the total age of users over 18.
// Follow-up: Can you write the same logic using just reduce()?
// Question: When is it better to use chaining vs a single reduce()?

// Chained version
const totalAdultAge = users
  .filter(user => user.age > 18)
  .map(user => user.age)
  .reduce((sum, age) => sum + age, 0);

console.log(totalAdultAge); // 57

// Reduce-only version
const totalAdultAge2 = users.reduce((sum, user) => {
  return user.age > 18 ? sum + user.age : sum;
}, 0);

console.log(totalAdultAge2); // 57
