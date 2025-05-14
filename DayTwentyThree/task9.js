//Task 9: Share Methods via Prototype
//Create a constructor function and define methods on its prototype.
//Question: How does this approach benefit memory usage compared to defining methods inside the constructor?

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  return this.name;
};

let p1 = new Person("Alice");
let p2 = new Person("Bob");

console.log(p1.sayName === p2.sayName); // true
