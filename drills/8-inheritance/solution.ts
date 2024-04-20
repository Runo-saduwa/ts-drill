// ⚠️ SOLUTION ⚠️
//  Exercise 8: Inheritance
// Create a class Animal with a method makeSound. Extend this class with another class Dog that overrides the makeSound method to print "Bark".

class Animal {
  makeSound(): any {

  }
}

class Dog extends Animal {
  makeSound(): any {
      console.log('Bark!!')
  }
}

const dog = new Dog();

dog.makeSound()