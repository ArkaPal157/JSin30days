//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    updateYear(newYear) {
        this.year = newYear;
    }
};

book.updateYear(2023);
console.log(book);

