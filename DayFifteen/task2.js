// Task 2:
// Add a method to the Person class that updates the age property
// and logs the updated age.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age is ${this.age}`);
    }
  }
  
  const p2 = new Person("Bob", 25);
  p2.updateAge(28);
  