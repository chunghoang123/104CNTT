class Books {
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

class Librarys {
    private books: Books[] = [];

    public addBook(book: Books): void {
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
