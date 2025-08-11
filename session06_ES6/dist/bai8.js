"use strict";
class Book {
    constructor(id, title, author, isAvailable = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    getInfo() {
        console.log(`${this.id} - ${this.title} (${this.author}) - ${this.isAvailable ? "Còn" : "Hết"}`);
    }
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }
        return false;
    }
    returnBook() {
        this.isAvailable = true;
    }
    getId() { return this.id; }
    getTitle() { return this.title; }
    isBookAvailable() { return this.isAvailable; }
}
class Member {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }
    borrow(book) {
        if (book.borrowBook()) {
            this.borrowedBooks.push(book);
            console.log(`${this.name} mượn "${book.getTitle()}"`);
        }
        else {
            console.log(`"${book.getTitle()}" đã được mượn.`);
        }
    }
    returnBook(bookId) {
        const index = this.borrowedBooks.findIndex(b => b.getId() === bookId);
        if (index !== -1) {
            this.borrowedBooks[index].returnBook();
            console.log(`${this.name} trả sách ID ${bookId}`);
            this.borrowedBooks.splice(index, 1);
        }
    }
    getName() { return this.name; }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) { this.books.push(book); }
    addMember(member) { this.members.push(member); }
    findBookByTitle(title) {
        return this.books.filter(b => b.getTitle().includes(title));
    }
    showAllBooks() { this.books.forEach(b => b.getInfo()); }
}
const library = new Library();
library.addBook(new Book(1, "Lập trình Java", "An"));
library.addBook(new Book(2, "TypeScript cơ bản", "Bình"));
library.addBook(new Book(3, "Node.js nâng cao", "Chi"));
library.addBook(new Book(4, "Cấu trúc dữ liệu", "Dũng"));
library.addBook(new Book(5, "Thuật toán", "Hà"));
library.addMember(new Member(1, "Minh"));
library.addMember(new Member(2, "Lan"));
library.addMember(new Member(3, "Tuấn"));
library.members[0].borrow(library.books[1]);
library.members[1].borrow(library.books[1]);
library.members[0].returnBook(2);
console.log("\nDanh sách sách:");
library.showAllBooks();
