// Generator = way to lazily generate values so only the operations required are carried out

// Asterisk makes the function a Generator definition
function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    // Allows generator to generate values forever
    yield a; // Returns next value and pauses execution
    [a, b] = [b, a + b]; // Reassign a to b, and b to a+b (computing the next number in sequence)
  }
}

let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator.next()); // { value: 0, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 2, done: false }
console.log(fibonacciGenerator.next()); // { value: 3, done: false }

// Generators can be typed using the IterableIterator<T> type
function* createNumbers(): IterableIterator<number> {
  let n = 0;
  while (true) {
    yield n++;
  }
}

let numbers = createNumbers();
console.log(numbers.next()); // { value: 0, done: false }
console.log(numbers.next()); // { value: 1, done: false }
console.log(numbers.next()); // { value: 2, done: false }
console.log(numbers.next()); // { value: 3, done: false }
console.log(numbers.next()); // { value: 4, done: false }
