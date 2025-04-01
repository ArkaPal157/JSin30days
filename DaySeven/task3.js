//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.getDetails());

// `` is used for multiline strings