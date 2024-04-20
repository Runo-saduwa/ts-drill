//  ⚠️ SOLUTION ⚠️
// Exercise 7: Private vs. Public
// Create a class Counter with a private property count of type number initialized to 0 and a public method increment that increases count by 1. Add another method to retrieve the value of count.

class Counter {
  private count: number = 0;

  increment(): number {
    return this.count++;
  }

  getCount(): void {
    const derivedCount = this.count
    console.log(derivedCount);
  }
}


// Testing
const count = new Counter();


count.increment();
count.increment();
count.increment();

 count.getCount()




