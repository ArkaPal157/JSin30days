/*
Task 3: Detached DOM Nodes
- Create and remove DOM elements in JavaScript.
- Keep a reference to a removed element in a variable.
- Use DevTools to inspect memory and show how this causes a leak.
- Fix it: Nullify the reference and observe memory usage again.
*/

let leakedElement = document.createElement("div");
document.body.appendChild(leakedElement);
document.body.removeChild(leakedElement); // Detached

console.log("Element removed, but still referenced:", leakedElement);

// Fix
leakedElement = null; // Now it's eligible for garbage collection
