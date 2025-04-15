// Task 5: Queue with enqueue, dequeue, front

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(value) {
      this.items.push(value); // Add to end
    }
  
    dequeue() {
      return this.items.shift(); // Remove from front
    }
  
    front() {
      return this.items[0]; // See first
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue("Task1");
  queue.enqueue("Task2");
  console.log(queue.front()); // Output: Task1
  console.log(queue.dequeue()); // Output: Task1
  console.log(queue.front()); // Output: Task2
  