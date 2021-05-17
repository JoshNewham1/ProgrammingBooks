// Iterators = flip side of generators, consume the generator's values

// Iterable = any object with Symbol.iterator property, whose value is a function that returns an iterator
// Iterator = any object that defines a method called next, which returns an object in the form { value: any, done: boolean }

// When defining a generator, a value is returned that is both an iterator and iterable (IterableIterator)

// Iterators can be manually defined like so
let numberIterator = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};

// Iterators can be iterated through using for...of
for (let a of numberIterator) {
  console.log(a);
}

// They can also be spread into an array
let numbersArr = [...numberIterator];

// Finally, they can be destructured into variables
let [one, two, ...rest] = numberIterator;
console.log(one, two, rest[0]); // 1, 2, 3
