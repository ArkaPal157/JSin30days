// Task 10: Recursive Tree Depth Calculation
// Write a recursive function to calculate the depth of a binary tree.
// Log the result for a few test cases.

// Tree node class
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Binary tree class with insert and depth calculation
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    // Recursive function to calculate tree depth
    getDepth(node = this.root) {
      if (node === null) return 0;
      const leftDepth = this.getDepth(node.left);
      const rightDepth = this.getDepth(node.right);
      return Math.max(leftDepth, rightDepth) + 1;
    }
  }
  
  // Create binary tree and insert values
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  
  // Calculate and log depth
  console.log("Tree Depth:", tree.getDepth()); // Output: 3
  