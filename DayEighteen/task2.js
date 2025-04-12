// Task 2: Implement a LinkedList Class
// Methods: add to end, remove from end, display all nodes

class LinkedList {
    constructor() {
      this.head = null; // Start of the list
    }
  
    addToEnd(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode; // If list is empty, make this node the head
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next; // Traverse till last node
        }
        current.next = newNode; // Add new node at the end
      }
    }
  
    removeFromEnd() {
      if (!this.head) return null; // Empty list
      if (!this.head.next) {
        this.head = null;
        return;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next; // Go to second last node
      }
      current.next = null; // Remove last node
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value); // Print each node's value
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.addToEnd(10);
  list.addToEnd(20);
  list.addToEnd(30);
  list.display(); // Output: 10, 20, 30
  list.removeFromEnd();
  list.display(); // Output: 10, 20
  