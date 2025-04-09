// Task 7:
// Add a getter method to the Person class to return the full name
// (assume a firstName and lastName property).
// Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const p3 = new Person("Grace", "Hopper");
  console.log(p3.fullName);
  