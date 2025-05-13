//Task 4: Explore Scope Chain Resolution
//Create a nested function structure and try to access variables from different levels of the scope chain. Log which variables are accessible where.

var globalVar = "Global";

function outer() {
  var outerVar = "Outer";

  function inner() {
    var innerVar = "Inner";
    console.log("Accessing:", globalVar, outerVar, innerVar);
  }

  inner();
}

outer();
