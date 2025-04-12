// Task 1: Implement a Node Class
// Create a class to represent a node with a value and pointer to the next node

class Node {
    constructor(value) {
      this.value = value; // The actual data the node holds
      this.next = null;   // Points to the next node (initially null)
    }
  }
  
  // Example usage:
  const node1 = new Node(10);
  console.log(node1); // Output: Node { value: 10, next: null }
  