"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
    updateBook(id, newBook) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = newBook;
        }
    }
    listBook() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm) {
        return this.books.filter(book => { var _a, _b; return ((_a = book.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchTerm.toLowerCase())) || ((_b = book.author) === null || _b === void 0 ? void 0 : _b.toLowerCase()); });
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBookByYear(year) {
        return this.books.filter(book => book.year === year);
    }
}
const library = new Library();
const book1 = new Book(1, "Book1", "Author1", 2020);
const book2 = new Book(2, "Book2", "Author2", 2021);
const book3 = new Book(3, "Book3", "Author3", 2022);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.listBook();
