//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
const book = {
    title: "The Alchemist",
    year: 1988,
    getInfo() { //'getInfo: function() {}' short hand syntax version is 'getInfo() {}'
        return `${this.title} was published in ${this.year}`;
    }
};

console.log(book.getInfo());
