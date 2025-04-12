// Task 3: Stack class with push, pop, and peek

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value); // Add to top
    }
  
    pop() {
      return this.items.pop(); // Remove from top
    }
  
    peek() {
      return this.items[this.items.length - 1]; // View top
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push("A");
  stack.push("B");
  console.log(stack.peek()); // Output: B
  console.log(stack.pop());  // Output: B
  console.log(stack.peek()); // Output: A
  