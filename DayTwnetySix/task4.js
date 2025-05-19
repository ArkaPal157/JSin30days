/*
Task 4: Event Listeners and Leaks
- Add event listeners to multiple elements.
- Remove elements from the DOM but forget to remove listeners.
- Use the DevTools Performance or Memory tab to show leak behavior.
- Task: Properly remove listeners and compare.
*/

const button = document.createElement("button");
button.innerText = "Click me";
document.body.appendChild(button);

function onClick() {
  console.log("Button clicked");
}

button.addEventListener("click", onClick);

document.body.removeChild(button); // Still has listener!

// Fix
button.removeEventListener("click", onClick);
