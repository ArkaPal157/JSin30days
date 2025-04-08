//Create a module that exports an object representing a person with properties and methods.
//Import and use this module in another script.

export const person={
    name: "Arka",
    greet () {
return `Hello, my name is ${this.name}`
    }
};