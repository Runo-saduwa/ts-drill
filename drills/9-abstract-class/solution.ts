// ⚠️ SOLUTION ⚠️
//  Exercise 9: Abstract Class
// Define an abstract class Shape with an abstract method area that returns a number. Extend this class with Circle and Square classes, implementing the area method according to each shape's formula.

/*
 
Context

In TypeScript, an abstract class is a base class that cannot be instantiated on its own—only extended by other classes. 
Abstract classes are primarily used for setting up a foundation that other classes can build upon. 
They allow you to define functionality that must be implemented by any derived classes, 
ensuring a certain level of uniformity while still allowing flexibility in how those requirements are met.
*/

abstract class Shape {
  abstract area(x: number): number;
}

class Circle extends Shape {
  area(x: number): number {
    // area of circle = 3.141 * r^2
    return 3.141 * (x ** 2); // or  Math.pow(x, 2)
  }
}

class Square extends Shape {
  area(x: number): number {
    // area of square = 4l
    return 4 * x;
  }
}

const circle = new Circle();
const square = new Square();

console.log(circle.area(2));

console.log(square.area(2));
