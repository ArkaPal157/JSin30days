//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
};

for (let key in book) { //for in loop is used to iterate over the properties (keys) of an object
    console.log(`${key}: ${book[key]}`);
}
