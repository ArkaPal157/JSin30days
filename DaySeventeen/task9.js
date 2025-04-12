// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function inOrderTraversal(node) {
    if (!node) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
  
  // Creating a sample binary tree
  let root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  
  // In-order traversal output
  console.log("In-order traversal:");
  inOrderTraversal(root);  // 5, 10, 15
  