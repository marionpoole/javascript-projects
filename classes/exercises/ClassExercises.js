// Define your Book class here:
let currentYear = 2024;
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discardedBook) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discardedBook = discardedBook;
    }
    checkout(uses=1) {
        this.timesCheckedOut += uses;
    }
}
// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discardedBook) {
      super(title, author, copyright, isbn, pages, timesCheckedOut, discardedBook);  
    }
    discard(currentYear) {
        if(currentYear-this.copyright > 5) {
            this.discardedBook = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discardedBook) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discardedBook);
    }
    discard() {
        if(this.timesCheckedOut > 100) {
            this.discardedBook = 'Yes';
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let pridePrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');
let shuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000000, 1147, 1, 'No')

// Code exercises 4 & 5 here:
console.log(pridePrejudice.checkout(5));
console.log(shuttleBuildingManual.discard());