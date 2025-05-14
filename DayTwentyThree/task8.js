//Task 8: Override a Method on an Instance
//Override a method on an instance that is originally defined in the prototype.
//Question: How does method resolution work in this case?

function Car() {}
Car.prototype.horn = function() {
  return "Beep!";
};

let myCar = new Car();
myCar.horn = function() {
  return "Custom horn!";
};

console.log(myCar.horn()); // "Custom horn!"
delete myCar.horn;
console.log(myCar.horn()); // "Beep!"
