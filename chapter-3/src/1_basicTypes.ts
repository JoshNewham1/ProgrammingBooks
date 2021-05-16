// Any type
let any1: any = 666;
let any2: any = ["danger"];
let any3 = any1 + any2; // Type: any

// Unknown type
let uk1: unknown = 30;
let uk2 = uk1 === 123;
let uk3 = uk1 + 10;
if (typeof uk1 === "number") {
  let uk4 = uk1 + 10;
}

// Boolean type
let bool1 = true;
var bool2 = false;
const bool3 = true; // Type: always true -> type literal
let bool4: boolean = true;
let bool5: true = true;
let bool6: true = false;

// Number type
let num1 = 1234;
let num2 = Infinity * 0.1;
const num3 = 5678;
let num4 = num1 < num2;
let num5: number = 100;
let num6 = 26.218;
let num7: 26.218 = 26.218;
let num8: 26.218 = 10;
const num9 = 1_000_000; // Can use _ separator to make easier to read

// Bigint type
// Used to store large integers up to 2^53
// Requires ES2020
let big1 = 1234n;
const big2 = 5678n;
var big3 = big1 + big2;
let big4 = big1 < 1235;
let big5 = 88.5n; // Must be an integer
let big6: bigint = 100n;
let big7: 100n = 100n;
let big8: bigint = 100; // Numbers aren't assignable to bigint (without 'n')

// String type
let str1 = "hello";
var str2 = "josh";
const str3 = "!";
let str4 = str1 + " " + str2 + str3;
let str5: string = "zoom";
let str6: "john" = "john";
let str7: "john" = "zoe";

// Symbol type
// Released in ES2015 and is an alternative to string keys in objects and maps
// Prevents accidental setting of keys as each symbol is unique, even with the same input
let sym1 = Symbol("a");
let sym2: symbol = Symbol("b");
var sym3 = sym1 === sym2;
let sym4 = sym1 + "x";
const sym5 = Symbol("e");
const sym6: unique symbol = Symbol("f");
let sym7: unique symbol = Symbol("f");
let sym8 = sym5 === sym5; // Always true
let sym9 = sym5 === sym6; // Error that this is always false due to unique constraint

// Object type
let obj1: object = {
  b: "x"
};
obj1.b; // object type too generic

let obj2 = {
  b: "x"
};
obj2.b; // Inferred type is correct

let obj3 = {
  c: {
    d: "f"
  }
}

let obj4: {b: string} = {
  b: "x"
}; // Explicitly typed version of obj1

let userObj: {
  firstName: string,
  lastName: string,
  age: number
} = {
  firstName = "John",
  lastName = "Doe",
  age = 45
};

// TypeScript can also imply this from class declarations
class PersonClass {
  constructor(
    public firstName: string, // public is short for this.firstName = firstName
    public lastName: string, 
    public age: number) 
  {}
};
let userObj2 = new PersonClass("John", "Doe", 45);

// TypeScript complains if we leave off properties or provide too many
let obj5: {b: number};
obj5 = {};
obj5 = {
  b: 10,
  c: 15
};

// To allow optional properties, use ?
let obj6: {
  b: number,
  c?: string, // obj6 can have property 'c' which can be a string or undefined
  // Index signature
  [key: number]: boolean // obj6 may have any number of numerical properties that have boolean values
} = {
  b: 1,
  c: "Josh",
  1: true,
  2: false
};

let userObj3: {
  readonly firstName: string,
  readonly lastName: string
} = {
  firstName: "Abby",
  lastName: ""
};
userObj3.firstName = "Abbey";

// Empty object type is assignable to anything - avoid
// (equivalent to type Object)
let emptyObject: {};
emptyObject = {};
emptyObject = [1, 2, 3];
emptyObject = {x: 1};
emptyObject = 1;