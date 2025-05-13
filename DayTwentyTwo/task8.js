//Task 8: Hoisting of Function Expressions
//Define a function using a function expression and call it before the expression. Log the error.
console.log(exprFunc()); //  TypeError: exprFunc is not a function

var exprFunc = function () {
  return "I am a function expression";
};
