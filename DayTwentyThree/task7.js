//Task 7: Override an Inherited Property
//Create an object that overrides a property it inherits.
//Question: What happens when you delete the overridden property?


let proto = { color: "blue" };
let obj = Object.create(proto);

obj.color = "red";
console.log(obj.color); // "red"

delete obj.color;
console.log(obj.color); // "blue"
