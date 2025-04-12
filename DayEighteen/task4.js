// Task 4: Reverse a string using stack

function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
      stack.push(char); // Push each character to stack
    }
  
    let reversed = '';
    while (stack.items.length) {
      reversed += stack.pop(); // Pop each character
    }
    return reversed;
  }
  
  // Example usage:
  console.log(reverseString("hello")); // Output: "olleh"
  