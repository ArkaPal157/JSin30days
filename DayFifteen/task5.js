// Task 5:
// Add a static method to the Person class
// that returns a generic greeting message.
// Call this static method without creating an instance of the class
// and log the message.

class Person {
    static genericGreet() {
      return "Hello from the Person class!";
    }
  }
  
  console.log(Person.genericGreet());
  