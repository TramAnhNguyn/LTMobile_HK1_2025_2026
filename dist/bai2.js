"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
class Student extends bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        console.log(`--- Student Info ---`);
        console.log(`Name: ${this.getName()}`);
        console.log(`Age: ${this.getAge()}`);
        console.log(`Grade: ${this.grade}`);
    }
}
const student = new Student("Tram Anh", 21, 8.1);
student.displayInfo();
