// Task 8:
// Add a setter method to the Person class to update the name properties
// (firstName and lastName).
// Update the name using the setter and log the updated full name.

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  }
  
  const p4 = new Person("Harry", "Potter");
  p4.fullName = "Hermione Granger";
  console.log(p4.fullName);
  