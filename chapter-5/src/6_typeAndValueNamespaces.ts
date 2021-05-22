// Types and values are namespaced separately in TS,
// meaning that a type and a value can exist with the same name
// and TS will figure out from context which one to use

// Values
let x = 1999;
function y() {}

// Types
type x = number;
interface b {
  (): void;
}

if (x + 1 > 3) {
  // Infers that x is a value
  let z: x = 3; // Infers that x is a type
}

// Classes and enums are special as they generate both a value and type namespace
class C {}
let c: C = new C();

enum E {
  F,
  G,
}
let enumeration: E = E.F;

// This allows us to easily enforce that a variable must be an object of a class,
// or a member of an enum

// However, to type any static members of a class (e.g. to type the constructor), it works a bit differently
// as a class has two types: the type of the static side and the type of the instance (object) side
// https://www.typescriptlang.org/docs/handbook/interfaces.html#difference-between-the-static-and-instance-sides-of-classes

// To type both sides correctly, class expressions can be used, using the class's explicit type as the static interface
// and ensuring it "implements" the interface for the instance attributes/methods
type State = {
  [key: string]: string;
};

// Instance interface
interface IStringDatabase {
  state: State;
  get(key: string): string | null;
  set(key: string, value: string): void;
}

// Static interface
interface IStringDatabaseConstructor {
  new (state: State): IStringDatabase;
  from(state: State): IStringDatabase;
}

// Class expression
const StringDatabase: IStringDatabaseConstructor = class StringDatabase
  implements IStringDatabase
{
  constructor(public state: State = {}) {}
  static from(state: State) {
    let db = new StringDatabase();
    for (let key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
  get(key: string) {
    return key in this.state ? this.state[key] : null;
  }
  set(key: string, value: string) {
    this.state[key] = value;
  }
};

// Then, to access an underlying type of a static member, the "typeof" keyword can be used
console.log(typeof StringDatabase.from); // function
