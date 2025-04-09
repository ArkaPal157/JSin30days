// Task 3:
// Define a class Student that extends the Person class.
// Add a property studentId and a method to return the student ID.
// Create an instance of the Student class and log the student ID.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  }
  
  const s1 = new Student("Charlie", 20, "S101");
  console.log(s1.getStudentId());
  