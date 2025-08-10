"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
}
const book1 = new Book("Lập Trình JavaScript", "Nguyễn Văn A");
const book2 = new Book("Học TypeScript", "Trần Văn B");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.viewBooks();
