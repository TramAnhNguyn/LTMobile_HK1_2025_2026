class Car{
    private brand: string;
    private model: string;
    private year: number;

    public constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public displayCarInfor(): void{
        console.log('-----Car Information-----');
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

var car = new Car("Vinfast", "VF 7", 2024 );
console.log(car.displayCarInfor())