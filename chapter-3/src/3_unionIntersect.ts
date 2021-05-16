// Multiple types can be allowed, in this case they are treated like sets
// Union - type 1 OR type 2 OR both
// Intersect - type 1 AND type 2

type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

let animal: CatOrDogOrBoth;

// Cat
animal = {
  name: "Bonkers",
  purrs: true,
};

// Dog
animal = {
  name: "Miller",
  barks: false,
  wags: true,
};

// Both
animal = {
  name: "Miller",
  purrs: true,
  barks: false,
  wags: true,
};

// Intersect has to have all values from both
let animal2: CatAndDog = {
  name: "Domino",
  purrs: true,
  barks: true,
  wags: true,
};

// Unions generally come up more often
// They are very useful for function return types
const trueOrNull = (isTrue: boolean) => {
  if (isTrue) {
    return "true";
  } else {
    return null;
  }
};

type TrueOrNullReturn = string | null;

const returnedValue: TrueOrNullReturn = trueOrNull(true);

// Another example using "truthy" behaviour
const truthyTest = (a: string, b: number) => {
  return a || b;
};

type TruthyReturn = string | number;

const returnedValue2: TruthyReturn = truthyTest("", 10); // Would return 10
