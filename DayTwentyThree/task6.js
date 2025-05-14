//Task 6: Modify a Prototype
//Add a method to a constructor’s prototype after objects have been created.
//Question: Do existing instances reflect the new method?

function Animal(name) {
  this.name = name;
}

let dog1 = new Animal("Rex");
Animal.prototype.sayHi = function() {
  return `Hi, I am ${this.name}`;
};

console.log(dog1.sayHi()); // "Hi, I am Rex"
