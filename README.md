# TypeScript Drill 🏋🏾‍♀️💪🏾

Master TypeScript with these drills


## Set up
 
#### Install deps
`npm install`


You will find all the drill starter folders in `drills`. example `drills/define-an-interface`. each drill folder has a `main.ts` & `solution.ts` file where you will write solution and find the solution to that drill respectively. 

#### Run your script

`npx ts-node drills/<example-drill>/main.ts`



### Exercise 1: Define an Interface

`Create an interface called Person that has two properties: name of type string and age of type number.`

### Exercise 2: Implement the Interface
`Create a class called Student that implements the Person interface and includes an additional property course of type string.`

### Exercise 3: Use Union Types
`Define a type called Status that can be either 'active', 'inactive', or 'new'. Then create a variable of this type and assign 'active' to it.`

### Exercise 4: Function with Generics
`Write a function called getIdentity that takes a parameter of any type and returns a value of the same type. Use a generic to achieve this.`

### Exercise 5: Enums and Interfaces
`Create an enum called Color with values 'Red', 'Green', and 'Blue'. Then, define an interface ColoredCircle with two properties: color (using the Color enum) and radius (number).`

### Exercise 6: Class with Static and Readonly
`Create a class called Configuration with a static readonly property fileName of type string initialized to 'config.json', and a method called printConfig that prints fileName.`

### Exercise 7: Private vs. Public
`Create a class Counter with a private property count of type number initialized to 0 and a public method increment that increases count by 1. Add another method to retrieve the value of count.`

### Exercise 8: Inheritance
`Create a class Animal with a method makeSound. Extend this class with another class Dog that overrides the makeSound method to print "Bark".`

### Exercise 9: Abstract Class
`Define an abstract class Shape with an abstract method area that returns a number. Extend this class with Circle and Square classes, implementing the area method according to each shape's formula.`

### Exercise 10: Advanced Typing
`Create a mapped type that takes an interface and produces a new interface with all properties of the original interface set to optional.`

