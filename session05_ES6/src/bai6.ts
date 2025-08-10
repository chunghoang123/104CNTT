class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public viewBooks(): void {
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
