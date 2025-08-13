class Book {
    id: number;
    title: string;
    author: string;
    year: number;

    constructor(
        id: number,
        title: string,
        author: string,
        year: number
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;

    }
}


class Library<T> {
    private books: T[] = []
    addBook(book: T): void {
        this.books.push(book)
    }
    getBookById(id: number): T | undefined {
        return this.books.find((book: T) => (book as Book).id === id)
    }

    removeBook(id: number): void {
        this.books = this.books.filter(book => (book as Book).id !== id)

    }
    updateBook(id: number | string, newBook: T) {
        const bookIndex = this.books.findIndex(book => (book as Book).id === id)
        if (bookIndex !== -1) {
            this.books[bookIndex] = newBook
        }
    }

    listBook(): T[] {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm: string): T[] {
        return this.books.filter(book => (book as Book).title?.toLowerCase().includes(searchTerm.toLowerCase()) || (book as Book).author?.toLowerCase())
    }

    getTotalBooks():number{
        return this.books.length;
    }

    findBookByYear(year :number):T[]{
        return this.books.filter(book => (book as Book).year === year)
    }
}

const library = new Library<Book>();
const book1 = new Book(1, "Book1", "Author1", 2020);
const book2 = new Book(2, "Book2", "Author2", 2021);
const book3 = new Book(3, "Book3", "Author3", 2022);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBook();

