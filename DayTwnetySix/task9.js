/*
Task 9: Simulate a Memory Leak in a Single Page App
- Use a simulated component-based structure.
- “Mount” and “unmount” components but forget to clean up timers or listeners.
- Use DevTools to show how objects continue to persist in memory.
- Fix the bug and verify via snapshot comparison.
*/

function mountComponent() {
  const element = document.createElement("div");
  element.innerText = "Component";
  document.body.appendChild(element);

  const intervalId = setInterval(() => {
    console.log("Still running...");
  }, 1000);

  return () => {
    document.body.removeChild(element);
    // ❌ Forgot: clearInterval(intervalId)
  };
}

let unmount = mountComponent();
setTimeout(() => {
  unmount(); // DOM removed but interval still running (leak!)
}, 3000);
