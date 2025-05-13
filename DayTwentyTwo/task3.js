//Task 3: Visualize Call Stack Order
//Create nested function calls. Use console.log inside each function to show the order in which they appear on the call stack.

function first() {
  console.log("Entered first()");
  second();
  console.log("Exiting first()");
}

function second() {
  console.log("Entered second()");
  third();
  console.log("Exiting second()");
}

function third() {
  console.log("Entered third()");
  console.log("Exiting third()");
}

first();
