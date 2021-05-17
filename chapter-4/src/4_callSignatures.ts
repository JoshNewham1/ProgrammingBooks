// Along with the individual parameters and return type, the function itself can be typed in terms of its "signature"
// instead of using the generic Function type
// In TS, the signature covers the parameters, their types and the return type

// Type-level code = just TS types declarations etc, isn't valid JS
// Value-level code = everything else (JS)

// Examples of call signatures:
// function greet(name: string) returns string
type Greet = (name: string) => string;

// function sumVariadic(...numbers: number[]) returns number
type SumVariadic = (...numbers: number[]) => number;

// It is usually better to write a function's type and definition together
type Log = (message: string, userId?: string) => void;

// Explicitly declare log3 as Log
// Note: don't need to type message or userId twice (contextual typing)
let log3: Log = (message, userId = "Not signed in") => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};

log3("Hello World");

// Explicit typing is also not needed in callback functions (functions that call other functions)
function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

// TS infers that n is a number from context
times((n) => console.log(n), 4); // Note: if f wasn't declared inline, TS wouldn't have inferred

// Overloaded function = function with multiple call signatures
// There are two equivalent syntaxes for declaring call signatures

// Shorthand:
type Hello = (name: string) => void;

// Full call signature:
type HelloFull = {
  (name: string): void;
};

// Full call signatures become more useful when dealing with overloaded functions
type Reservation = {
  from: Date;
  to?: Date;
  destination: string;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation | null;
  (from: Date, destination: string): Reservation | null;
};

// Design function to handle all possible overloads
let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string, // This can be either depending on overload
  destination?: string // This could be optional (undefined) depending on overload
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // Book a one-way trip
    return {
      from: from,
      to: toOrDestination,
      destination: destination,
    };
  } else if (typeof toOrDestination === "string") {
    // Book a round trip
    return {
      from: from,
      destination: toOrDestination,
    };
  } else {
    // If the parameters are not correct, return null
    return null;
  }
};

let reservation1 = reserve(
  new Date(2020, 5, 16),
  new Date(2020, 6, 1),
  "Monaco"
);
let reservation2 = reserve(new Date(2020, 5, 16), "Sevilla");

console.log(reservation1);
console.log(reservation2);

// The return type of a function can depend on its parameters using this system
type CreateElement = {
  (tag: "a"): HTMLAnchorElement;
  (tag: "canvas"): HTMLCanvasElement;
  (tag: "table"): HTMLTableElement;
  (tag: "string"): HTMLElement; // Catchall - TS will fall back to HTMLElement
};

let createElement: CreateElement = (tag: string): HTMLElement => {
  // To type the parameter, we combine all the types in the overloads
  // i.e. "a" | "canvas" | "table" | string
  // but these unioned together is just string
  // Then, the returned value can be just a HTMLElement as that is the superclass
  // of all elements
};

// Function declarations can also be overloaded with a different syntax:
function createElement2(tag: "a"): HTMLAnchorElement;
function createElement2(tag: "canvas"): HTMLCanvasElement;
function createElement2(tag: "table"): HTMLTableElement;
function createElement2(tag: string): HTMLElement {
  // ...
}

// Note: overloading isn't just for calling functions, it can also be used to model properties on functions
function warnUser(warning: string) {
  if (warnUser.wasCalled) {
    return;
  }
  warnUser.wasCalled = true;
  console.log(warning);
}
warnUser.wasCalled = false;

// This type could then be used if warnUser was a callback, for example
type WarnUser = {
  (warning: string): void;
  wasCalled: boolean;
};
