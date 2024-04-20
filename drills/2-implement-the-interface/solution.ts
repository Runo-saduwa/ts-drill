// ⚠️ SOLUTION ⚠️
// Exercise 2: Implement the Interface
// Create a class called Student that implements the Person interface and includes an additional property course of type string.

interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  name: string;
  age: number;
  course: string

  constructor(name: string, age: number, course: string) {
    this.name = name;
    this.age = age;
    this.course = course
  }
}


const student = new Student('Ejiro', 20, 'CS');


console.log(student)