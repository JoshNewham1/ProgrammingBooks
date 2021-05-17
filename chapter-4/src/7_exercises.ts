// Ex 3: modify Reserve to book a reservation immediately (without dates)
type Reservation2 = {
  destination: string;
  from?: Date;
  to?: Date;
};

type Reserve2 = {
  (from: Date, to: Date, destination: string): Reservation2 | null;
  (from: Date, destination: string): Reservation2 | null;
  (destination: string): Reservation2 | null;
};

let reserve2: Reserve2 = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string, // This can be either depending on overload
  destination?: string // This could be optional (undefined) depending on overload
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    // Book a one-way trip
    return {
      from: fromOrDestination,
      to: toOrDestination,
      destination: destination,
    };
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === "string"
  ) {
    // Book a round trip
    return {
      from: fromOrDestination,
      destination: toOrDestination,
    };
  } else if (typeof fromOrDestination === "string") {
    // Book immediately
    return {
      destination: fromOrDestination,
    };
  } else {
    // If the parameters are not correct, return null
    return null;
  }
};

let reservation3 = reserve2(
  new Date(2020, 5, 16),
  new Date(2020, 6, 1),
  "Monaco"
);
let reservation4 = reserve2(new Date(2020, 5, 16), "Sevilla");
let reservation5 = reserve2("Malaga");

console.log(reservation3);
console.log(reservation4);
console.log(reservation5);

// Ex 4: Update call() to work only for functions whose second argument is a string
function callWithString<T extends unknown, R>(
  f: (...args: [T, string, ...T[]]) => R,
  ...args: [T, string, ...T[]]
): R {
  return f(...args);
}

function hello(repeat: number, name: string, loud: number): void {
  for (let i = 0; i < repeat; i++) {
    if (loud === 1) {
      console.log("HELLO " + name.toUpperCase());
    } else {
      console.log("Hello " + name);
    }
  }
}

callWithString(hello, 5, "Josh", 1);

// Ex 5: Implement assertion function "is"
function is<T>(...args: T[]): boolean {
  let result = true;
  for (let i = 0; i < args.length - 1; i++) {
    result = args[i] === args[i + 1];
  }
  return result;
}

console.log(is(1, 1, 1, 1));
console.log(is("foo", "bar"));
// console.log(is(10, "bar")); - fails
console.log(is([1], [1, 2], [1, 2, 3]));
