//Task 10: Explain TDZ Behavior
//Log the exact point at which the variable leaves the TDZ (i.e., just before and after declaration). Compare with var.
// TDZ starts here
try {
  console.log("Before let declaration:", tdzLet); // ReferenceError
} catch (e) {
  console.log("Caught error:", e.message); // "Cannot access 'tdzLet' before initialization"
}

let tdzLet = "Now it's declared";

console.log("After declaration:", tdzLet); // Works fine

// Compare with var
console.log("Before var declaration:", tdzVar); // undefined
var tdzVar = "Declared";
console.log("After var declaration:", tdzVar); // "Declared"
