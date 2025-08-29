export class Person {
    protected name : string;
    protected age : number; 

    public constructor (name : string, age : number){
        this.name = name;
        this.age = age;
    }

    public getName(): string {
    return this.name;
  }

    public getAge(): number {
    return this.age;
  }
}

const person = new Person("Tram Anh", 21);
console.log("Name : " + person.getName());
console.log("Age: " +person.getAge());