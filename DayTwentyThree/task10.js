//Task 10: Benchmark Inherited vs Own Properties
//Write code to measure access times for own properties vs inherited ones (in a high-iteration loop).
//Question: Are there noticeable performance differences in property access?

let parent = { inherited: 123 };
let child = Object.create(parent);
child.own = 456;

console.time("own");
for (let i = 0; i < 1e7; i++) {
  let x = child.own;
}
console.timeEnd("own");

console.time("inherited");
for (let i = 0; i < 1e7; i++) {
  let y = child.inherited;
}
console.timeEnd("inherited");
