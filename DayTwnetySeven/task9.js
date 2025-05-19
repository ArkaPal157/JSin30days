// Task 9 Question:
// Define small behavior functions: canFly, canSwim, canWalk as pure functions that take an object and return a new one.
// Compose these to create different animal objects.
// What are the benefits of composition over classical inheritance?

const canFly = obj => ({ ...obj, fly: () => console.log(`${obj.name} is flying`) });
const canSwim = obj => ({ ...obj, swim: () => console.log(`${obj.name} is swimming`) });
const canWalk = obj => ({ ...obj, walk: () => console.log(`${obj.name} is walking`) });

const compose = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const bird = compose(canFly, canWalk)({ name: "Sparrow" });
bird.fly();  // Sparrow is flying
bird.walk(); // Sparrow is walking
