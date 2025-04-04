//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");

Promise.all([p1, p2]).then((values) => {
  console.log(values); 
});
