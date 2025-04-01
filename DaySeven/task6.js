//Task 6: Access and log the name of the library and the titles of all the books in the library.
const library = {
    name: "Central Library",
    books: [
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
        { title: "The Alchemist", author: "Paulo Coelho", year: 1993 }
    ]
};

console.log("Library Name:", library.name);
library.books.forEach(books => console.log("Book Title:", books.title));
