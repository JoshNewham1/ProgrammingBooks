// Enums = enumerate the possible values for a type
// They are unordered data structures that map keys to values

// There are two types of enums - ones that map strings to strings,
// and ones that map strings to numbers
enum LanguageString {
  English,
  Spanish,
  Russian,
}

enum LanguageNum {
  English = 0,
  Spanish = 1,
  Russian = 2,
}

let myFirstLanguage = LanguageString.English;
let mySecondLanguage = LanguageString["Spanish"];

// Enums can use computed values, and TS will even infer the value for a key
enum LanguageInferred {
  English = 100,
  Spanish = 200 + 300,
  Russian, // TypeScript infers 501
}

// Enums can even mix data types for the value
enum Colours {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = 0xc10050, // Hex literal
  White = 255,
}
console.log(Colours.Red);

// TS allows you to access enums by both key and value
// However, key access is unsafe unless "const" is used
let red = Colours[0];
let nonExistent = Colours[100]; // No error

const enum LanguageConst {
  English,
  Spanish,
  Russian,
}

let english = LanguageConst.English;
let french = LanguageConst.French; // Error raised now
nonExistent = LanguageConst[100]; // Const enums don't allow reverse lookups however

// Unsupported numbers are also assignable to enums, so extra care is needed to ensure this raises an error
const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table,
}

function flip(f: Flippable) {
  return "Flipped it!";
}

flip(Flippable.Chair); // "Flipped it!"
flip(Flippable.Cup); // "Flipped it!"
flip(12); // "Flipped it!" (!!!)

// To fix this, we need to use string-valued enums
const enum FlippableString {
  Burger = "Burger",
  Chair = "Chair",
  Cup = "Cup",
  Skateboard = "Skateboard",
  Table = "Table",
}

function flipS(f: FlippableString) {
  return "Flipped it!";
}

flipS(FlippableString.Chair); // "Flipped it!"
flipS(FlippableString.Cup); // "Flipped it!"
flipS(12); // Error

// It is quite hard to use enums safely, so they should be avoided
// (there are alternatives) unless absolutely necessary
