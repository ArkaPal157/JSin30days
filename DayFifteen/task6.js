// Task 6:
// Add a static property to the Student class
// to keep track of the number of students created.
// Increment this property in the constructor and log the total number of students.

class Student {
    static count = 0;
  
    constructor(name) {
      this.name = name;
      Student.count++;
    }
  }
  
  const s3 = new Student("Eva");
  const s4 = new Student("Frank");
  console.log(`Total students: ${Student.count}`);
  