"use strict";
class Books {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
}
class Librarys {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. [ID: ${book.getId()}] ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(` Sách ID ${id} đã được cập nhật.`);
        }
        else {
            console.log(` Không tìm thấy sách với ID ${id}.`);
        }
    }
}
// Khởi tạo sách
const book3 = new Books(1, "Lập Trình JavaScript", "Nguyễn Văn A");
const book4 = new Books(2, "Học TypeScript", "Trần Văn B");
// Khởi tạo thư viện
const librarys = new Librarys();
librarys.addBook(book3);
librarys.addBook(book4);
console.log(" Trước khi cập nhật:");
librarys.viewBooks();
// Cập nhật thông tin sách
librarys.updateBookById(2, "TypeScript Nâng Cao", "Trần Văn B Cập Nhật");
console.log("\n📚 Sau khi cập nhật:");
librarys.viewBooks();
