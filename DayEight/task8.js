//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    
    // Method using shorthand syntax
    getInfo() {
        return `${this.title} by ${this.author} from the year ${this.year}`;
    },

    updateYear(newYear) {
        this.year = newYear;
    }
};

book.updateYear(2023);
console.log(book.year);
console.log(book.getInfo());