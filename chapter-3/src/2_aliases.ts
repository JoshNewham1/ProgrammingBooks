// Type aliases can be used to "point" to the real type,
// making the code easier to read, and reducing repetition of large types decs
// TSC doesn't try to infer types for these

type Age = number;
type Person = {
  name: string;
  age: Age;
};

let myAge: Age = 18; // The type declaration is optional, numbers can still be passed
let me: Person = {
  name: "Josh",
  age: myAge,
};

// Can't declare a type twice
type Colour = "Red";
// type Colour = "Blue" -> would error

// Types are local and only available in the current block scope
let x = Math.random() < 0.5;
if (x) {
  type Colour = "Blue";
  let chosenColour: Colour = "Blue";
} else {
  type Colour = "Red";
  let chosenColour: Colour = "Red";
}
