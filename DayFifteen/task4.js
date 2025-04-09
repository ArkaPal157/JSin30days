// Task 4:
// Override the greeting method in the Student class
// to include the student ID in the message.
// Log the overridden greeting message.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, I'm ${this.name}.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    greet() {
      return `Hi, I'm ${this.name}, ID: ${this.studentId}`;
    }
  }
  
  const s2 = new Student("Dana", 22, "S202");
  console.log(s2.greet());
  