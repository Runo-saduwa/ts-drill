//  ⚠️ SOLUTION ⚠️
// Exercise 5: Enums and Interfaces
// Create an enum called Color with values 'Red', 'Green', and 'Blue'. Then, define an interface ColoredCircle with two properties: color (using the Color enum) and radius (number).

const enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

interface ColoredCircle {
  color: Color;
  radius: number;
}

const favColors: ColoredCircle = {
  color: Color.Red,
  radius: 2,
};


console.log(favColors);