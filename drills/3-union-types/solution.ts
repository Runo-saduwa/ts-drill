//  ⚠️ SOLUTION ⚠️
// Exercise 3: Use Union Types
// Define a type called Status that can be either 'active', 'inactive', or 'new'. Then create a variable of this type and assign 'active' to it.

type Status = "active" | "inactive" | "new";

let stage: Status = "active";

console.log(stage)
