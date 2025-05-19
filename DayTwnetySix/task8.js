/*
Task 8: Detect and Optimize Layout Thrashing
- Write code that repeatedly reads and writes to DOM styles in a loop.
- Use DevTools Timeline to identify layout thrashing.
- Refactor to batch DOM reads and writes.
- Goal: Minimize layout reflows and repaints.
*/

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
document.body.appendChild(box);

// Layout thrashing
for (let i = 0; i < 100; i++) {
  const height = box.clientHeight; // read
  box.style.height = height + 1 + "px"; // write
}

// Optimized: batch read/write
const height = box.clientHeight;
for (let i = 0; i < 100; i++) {
  box.style.height = height + i + "px";
}
