class Book{
    private title: string;
    private author: string;
    private year: number;

    public constructor(title: string, author: string, year: number){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public displayBookInfor(): void{
        console.log('-----Book Information-----');
        console.log(`Title: ${this.title}`);
        console.log(`Auhthor: ${this.author}`);
        console.log(`Year: ${this.year}`);
    }
}

var book = new Book("Tangled", "Walt Disney", 2010 );
console.log(book.displayBookInfor())
