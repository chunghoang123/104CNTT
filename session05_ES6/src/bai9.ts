class Book2 {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getYear(): number {
        return this.year;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public setYear(year: number): void {
        this.year = year;
    }
}

class Library2 {
    private books: Book2[] = [];

    public addBook(book: Book2): void {
        this.books.push(book);
    }

    public viewBooks(): void {
        console.log("📚 Danh sách sách trong thư viện:");
        if (this.books.length === 0) {
            console.log(" Thư viện trống.");
            return;
        }
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. [ID: ${book.getId()}] ${book.getTitle()} - ${book.getAuthor()} (${book.getYear()})`);
        });
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Sách ID ${id} đã được cập nhật.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }

    public deleteBookById(id: number): void {
        const index = this.books.findIndex(b => b.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(` Sách ID ${id} đã bị xóa.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }

    public searchBooksByTitle(keyword: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );
        if (foundBooks.length > 0) {
            console.log(`🔍 Kết quả tìm kiếm cho "${keyword}":`);
            foundBooks.forEach(book => {
                console.log(`[ID: ${book.getId()}] ${book.getTitle()} - ${book.getAuthor()} (${book.getYear()})`);
            });
        } else {
            console.log(` Không tìm thấy sách với từ khóa "${keyword}".`);
        }
    }
}

const book7 = new Book2(1, "Lập Trình JavaScript", "Nguyễn Văn A", 2020);
const book8 = new Book2(2, "Học TypeScript", "Trần Văn B", 2021);

const library2 = new Library2();
library2.addBook(book7);
library2.addBook(book8);

library2.viewBooks();

console.log("\n Cập nhật sách ID 2:");
library2.updateBookById(2, "TypeScript Nâng Cao", "Trần Văn B Updated", 2024);
library2.viewBooks();

console.log("\n Xóa sách ID 1:");
library2.deleteBookById(1);
library2.viewBooks();

console.log("\n Tìm kiếm sách có chữ 'Lập':");
library2.searchBooksByTitle("Lập");
