"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayCarInfor() {
        console.log('-----Car Information-----');
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
var car = new Car("Vinfast", "VF 7", 2024);
console.log(car.displayCarInfor());
