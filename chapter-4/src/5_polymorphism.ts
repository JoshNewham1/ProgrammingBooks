// Concrete type = know exactly which type(s) you're expecting, and want to verify they have been passed
// Generic type = placeholder type that is used to enforce a type-level constraint in multiple places
// a.k.a a polymorphic type parameter

// Consider a generic filter function
// We could overload this with string[], number[] etc.
// but filtering objects would assume certain fields exist
// and would result in a type error

// This is what generic types solve
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};
// where T = any type passed in (multiple different generics can be used here, separated by commas)
// This ensures the same typed objects are passed in as the array, into the function
// and returned back, allowing for fields to be assumed etc.
let filter: Filter = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log("Filter:");
// Case when T is bound to number
console.log(filter([1, 2, 3], (num) => num >= 2));

// Case when T is bound to string
console.log(filter(["a", "b"], (str) => str !== "b"));

// Case when T is bound to {firstName: string}
console.log(
  filter(
    [{ firstName: "Josh" }, { firstName: "Joe" }, { firstName: "Will" }],
    (person) => person.firstName.startsWith("J")
  )
);

// Generics can be bound in different places
// Putting them before the call signature means that TS will bind a type to T
// when the method is called
// Placing T in the type alias means that TS will require us to bind a type
// explicitly when we used Filter (i.e. before the method was called - e.g. Filter<string>)
type FilterOne = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

type FilterTwo<T> = {
  (array: T[], f: (item: T) => boolean): T[];
};

type FilterThree = <T>(array: T[], f: (item: T) => boolean) => T[];

type FilterFour<T> = (array: T[], f: (item: T) => boolean) => T[];

// Filter One (full declaration) === Filter Three (shorthand)
// Filter Two (full declaration) === Filter Four (shorthand)

// Example with a generic map function
type MapType = {
  <T, U>(arr: T[], f: (item: T) => U): U[];
};

let map: MapType = (arr, f) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(f(arr[i]));
  }
  return result;
};

console.log("Map:");
console.log(map([1, 2, 3, 4], (n) => n + 1));

// If it is not given enough context, TS will default to inferring
// these generic types as being empty objects {}
// To get by this, define the generic type explicitly:
let genericPromise = new Promise<number>((resolve) => {
  resolve(45);
});
genericPromise.then((result) => {
  console.log(result * 4); // Would default to {} without explicit <number>
});

// Generic types can also be used within type aliases for more flexibility
// e.g. type of a DOM event
type MyEvent<T> = {
  target: T;
  type: string;
};

// Note: When using this type, the generic type will have to be filled in
// e.g. let myEvent: MyEvent<HTMLButtonElement | null> = {...}

// These aliases can be chained together, with the generic type being passed down
type TimedEvent<T> = {
  event: MyEvent<T>;
  from: Date;
  to: Date;
};

// Finally, a function can be declared with a generic type which will be
// inferred from the parameters and passed down, replacing T everywhere
function triggerEvent<T>(event: TimedEvent<T>): void {
  // Trigger the event
  // If T = Element, Element would be passed down to TimedEvent's event property
  // and then to MyEvent's target property
}
