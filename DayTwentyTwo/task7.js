//Task 7: Hoisting of Function Declarations
//Define a function using a declaration and call it before the declaration. Log the result.

console.log(declaredFunc()); // "I am declared"

function declaredFunc() {
  return "I am declared";
}
