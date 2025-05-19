// Task 10 Question:
// Given a class-based structure with shared behavior through inheritance, refactor it into a composition-based approach.
// Discuss when inheritance becomes problematic (e.g., multiple inheritance, fragile base class problem).
// Compare: Flexibility and reusability of both approaches.

// Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says woof`);
  }
}

const dog1 = new Dog("Rex");
dog1.walk();
dog1.bark();

// Composition alternative
const createDog = name =>
  compose(canWalk)({ name, bark: () => console.log(`${name} says woof`) });

const dog2 = createDog("Buddy");
dog2.walk();
dog2.bark();
