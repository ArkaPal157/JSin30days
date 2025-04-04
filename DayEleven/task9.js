//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const p1 = new Promise((res) => setTimeout(() => res("First"), 1000));
const p2 = new Promise((res) => setTimeout(() => res("Second"), 500));

Promise.race([p1, p2]).then((value) => {
  console.log("Winner:", value);
});
