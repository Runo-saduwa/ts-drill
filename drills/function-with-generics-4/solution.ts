// ⚠️ SOLUTION ⚠️
// Exercise 4: Function with Generics
// Write a function called getIdentity that takes a parameter of any type and returns a value of the same type. Use a generic to achieve this.


function getIdentity<T>(param: T): T {
  console.log(param)
  return param;
}


getIdentity('123')
getIdentity(123)
getIdentity([])