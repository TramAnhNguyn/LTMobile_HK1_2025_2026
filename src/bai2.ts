import { Person } from './bai1';

class Student extends Person {
    private grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    public displayInfo(): void {
        console.log(`--- Student Info ---`);
        console.log(`Name: ${this.getName()}`);
        console.log(`Age: ${this.getAge()}`);
        console.log(`Grade: ${this.grade}`);
    }
}

const student = new Student("Tram Anh", 21, 8.1);
student.displayInfo(); 
