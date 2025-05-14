//Task 5: Traverse the Prototype Chain
//Create a multi-level inheritance chain using constructor functions or classes.
//Question: How does JavaScript resolve property/method lookups along the prototype chain?

function A() {
  this.propA = "A";
}
function B() {
  this.propB = "B";
}
B.prototype = new A();

function C() {
  this.propC = "C";
}
C.prototype = new B();

let obj = new C();
console.log(obj.propA); // "A"
console.log(obj.propB); // "B"
console.log(obj.propC); // "C"
