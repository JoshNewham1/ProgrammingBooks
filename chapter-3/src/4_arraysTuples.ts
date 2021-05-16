// Arrays
// TypeScript supports either T[] or Array<T> to declare the type of arrays
let arr1 = [1, 2, 3];
var arr2 = ["a", "b"];
let arr3: string[] = ["a"];

let arr4 = [1, "a"]; // (string | number)[]
arr4.push(2);
arr4.push("b");
arr4.map((_) => {
  if (typeof _ === "number") {
    return _ * 3;
  }
  // Typing allows this assumption (that _ must be a string)
  return _.toUpperCase();
});

let arr5 = ["red"];
arr5.push("blue");
arr5.push(true);

// If no elements are provided, TS infers type as elements are added
const arrayBuilder = () => {
  let arr = []; // Type: any[]
  arr.push(1); // Type: number[]
  arr.push("x"); // Type: (string | number)[]
  // When this array leaves the scope it was defined in (i.e. returned from function),
  // the inferred type becomes permanent
  return arr;
};
let arr6 = arrayBuilder();
arr6.push(true);

// Tuples - have to be explicitly typed when declared
let tup1: [number] = [1];

// A tuple of first name, last name, birth year
let tup2: [string, string, number] = ["Josh", "Newham", 2002];

// Tuples support optional elements too
let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];

// This typing can be used for dynamic lengths and enforcing a minimum length
let friends: [string, ...string[]] = ["Sara", "Tali", "Chloe", "Claire"];
let heterogeneous: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];

// Read-only (immutable) arrays and tuples
let readOnlyArr: readonly number[] = [1, 2, 3];
let readOnlyArr2: readonly number[] = readOnlyArr.concat(4);
let three = readOnlyArr2[2];
readOnlyArr[4] = 5;
readOnlyArr.push(6);
