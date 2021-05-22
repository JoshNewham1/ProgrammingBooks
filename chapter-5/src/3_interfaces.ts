// Interfaces are similar to type aliases but have 3 main differences
// 1. Interfaces are less general, and cannot include type operators such as | or & as the resultant types
// 2. TS checks that, when you extend an interface, the new interface is completely assignable to the old
// 3. Multiple interfaces with the same name are merged together
type Food = {
  calories: number;
  tasty: boolean;
};

interface IFood {
  calories: number;
  tasty: boolean;
}

// Extending type aliases works like so:
type Sushi = Food & {
  salty: boolean;
};

type Cake = Food & {
  sweet: boolean;
};

// This can be done nearly equivalently with interfaces
interface ISushi extends IFood {
  salty: boolean;
}

interface ICake extends IFood {
  sweet: boolean;
}

// When extending and then overriding interface A, B must be completely assignable to A
interface A {
  good(x: number): string;
  bad(x: number): string;
}

interface B extends A {
  good(x: number | string): string;
  bad(x: string): string;
}

// Merging interfaces works like so and is not compatible with type aliases
interface User {
  name: string;
}

interface User {
  age: number;
}

let a: User = {
  name: "Josh",
  age: 18,
};

// However, two interfaces cannot conflict
interface User {
  name: number;
}

// Finally, if the interface declares generics, those generics must be defined in exactly the same way
// (down to the name) for the interfaces to be mergeable
interface GenericUser<Age extends number> {
  age: Age;
}

interface GenericUser<Age extends string> {
  age: Age;
}
