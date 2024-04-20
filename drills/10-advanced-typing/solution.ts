// ⚠️ SOLUTION ⚠️
//  Exercise 10: Advanced Typing
// Create a mapped type that takes an interface and produces a new interface with all properties of the original interface set to optional.

interface Person {
  name: string;
  email?: string;
}

type Optional<T> = {
  [P in keyof T]?: T[P]
};
