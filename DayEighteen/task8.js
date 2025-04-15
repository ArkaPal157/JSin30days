// Task 8: BinaryTree with insert and in-order traversal

class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) node.left = newNode;
        else this._insertNode(node.left, newNode);
      } else {
        if (!node.right) node.right = newNode;
        else this._insertNode(node.right, newNode);
      }
    }
  
    inOrderTraversal(node = this.root) {
      if (node) {
        this.inOrderTraversal(node.left); // Visit left
        console.log(node.value);          // Visit current node
        this.inOrderTraversal(node.right); // Visit right
      }
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(12);
  tree.inOrderTraversal(); // Output: 5, 10, 12, 15
  