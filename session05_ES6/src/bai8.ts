class Book1 {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
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

    public setTitle(title: string): void {
        this.title = title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }
}

class Library1 {
    private books: Book1[] = [];

    public addBook(book: Book1): void {
        this.books.push(book);
    }

    public viewBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. [ID: ${book.getId()}] ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(` Sách ID ${id} đã được cập nhật.`);
        } else {
            console.log(` Không tìm thấy sách với ID ${id}.`);
        }
    }

    public searchBooksByTitle(keyword: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );
        if (foundBooks.length > 0) {
            console.log(` Kết quả tìm kiếm cho "${keyword}":`);
            foundBooks.forEach(book => {
                console.log(`[ID: ${book.getId()}] ${book.getTitle()} - ${book.getAuthor()}`);
            });
        } else {
            console.log(` Không tìm thấy sách với từ khóa "${keyword}".`);
        }
    }
}

const book5 = new Book1(1, "Lập Trình JavaScript", "Nguyễn Văn A");
const book6 = new Book1(2, "Học TypeScript", "Trần Văn B");

const library1 = new Library1();
library1.addBook(book5);
library1.addBook(book6);

library1.viewBooks();

console.log("\nTìm kiếm sách:");
library1.searchBooksByTitle("lập trình");
