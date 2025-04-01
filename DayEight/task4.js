//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
};

const { title, author } = book;

console.log("Title:", title);
console.log("Author:", author);
