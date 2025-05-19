/*
Task 7: Profile a Slow Function
- Write a function with a performance bottleneck (e.g., nested loops or inefficient DOM manipulation).
- Use Chrome DevTools → Performance tab to record and identify the slow part.
- Optimize the function and re-profile.
*/

function slowLoop() {
  const list = document.createElement("ul");
  for (let i = 0; i < 1000; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${i}`;
    list.appendChild(li); // Inefficient DOM update
  }
  document.body.appendChild(list);
}

// Optimized: Use DocumentFragment
function fastLoop() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 1000; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${i}`;
    fragment.appendChild(li);
  }
  const list = document.createElement("ul");
  list.appendChild(fragment);
  document.body.appendChild(list);
}
