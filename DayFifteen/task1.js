// Task 1:
// Define a class Person with properties name and age,
// and a method to return a greeting message.
// Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  const p1 = new Person("Alice", 30);
  console.log(p1.greet());
  