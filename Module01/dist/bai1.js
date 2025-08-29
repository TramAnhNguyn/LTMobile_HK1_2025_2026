"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
const person = new Person("Tram Anh", 21);
console.log("Name : " + person.getName());
console.log("Age: " + person.getAge());
