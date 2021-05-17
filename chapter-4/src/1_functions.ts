// Functions - functions are treated as objects in JS, this is reflected in TS too
// Generally have to explicitly state types for parameters (usually not inferred)

function add(a: number, b: number) {
  return a + b;
}

// Syntaxes:
// Named function
function greet(name: string) {
  return "Hello " + name;
}

// Function expression
let greet2 = function (name: string) {
  return "Hello " + name;
};

// Arrow function expression
let greet3 = (name: string) => {
  return "Hello " + name;
};

// Shorthand arrow function expression
let greet4 = (name: string) => "Hello " + name;

// Function constructor
// Avoid this like the plague - untyped
let greet5 = new Function("name", "return 'Hello ' + name");

// TypeScript will check the number and type of arguments against the defined parameters
// and throw an error if there is any mismatch

// Optional parameters can be specified by ? at the END of the parameter list
function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in");
}
log("Page loaded");
log("User signed in", "1234");

// Default parameters can be specified as normal, anywhere in the parameter list
type Context = {
  appId?: string;
  userId?: string;
};
function log2(message: string, context: Context = {}) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, context.userId || "Not signed in");
}
log2("Page loaded");
log2("User signed in", { userId: "1234" });

// If the function requires an array as an argument, this can be handled as expected
function sum(numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3])); // Returns 6

// TS also supports variadic functions, where a variable number of arguments can be passed,
// using rest parameters

// A function can have at most one rest parameter, and it must come at the END of the parameters list
function sumVariadic(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadic(1, 2, 3)); // Returns 6

// Functions can be called using (args), .call(thisValue, [args]), .apply(thisValue, args), or .bind(thisValue, args)()
add(10, 20);
add.apply(null, [10, 20]); // Spreads array over function paramters
add.call(null, 10, 20);
add.bind(null, 10, 20)();

// This shows that the "this" variable is defined for every function (often implicitly),
// making it difficult to type
// The value of "this" depends on how the function was called, not on how it was declared
// In TS, if you use "this", declare it in the function params along with a type
function fancyDateUnsafe() {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}

function fancyDateSafe(this: Date) {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}
