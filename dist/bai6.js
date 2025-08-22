"use strict";
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayBookInfor() {
        console.log('-----Book Information-----');
        console.log(`Title: ${this.title}`);
        console.log(`Auhthor: ${this.author}`);
        console.log(`Year: ${this.year}`);
    }
}
var book = new Book("Tangled", "Walt Disney", 2010);
console.log(book.displayBookInfor());
