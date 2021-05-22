// In JS, one class can't inherit from multiple others and there
// are no "trait" or "mixin" keywords

// We can get around this using mixins which are a pattern to allow us to
// mix behaviours and properties into a class

// e.g. creating a mixin to add a debug method to any class (without extending)

// Declare a generic type to cover any class with a constructor
type ClassConstructor<T> = new (...args: any[]) => T;

// Declare withEasyDebug mixin with a single type parameter that must be a
// class with at least a ClassConstructor, and has to have a getDebugValue() method
// (the binding of { getDebugValue() } to the constructor ensures the constructor returns an object
// with the getDebugValue() method)
function withEasyDebug<C extends ClassConstructor<{ getDebugValue(): object }>>(
  Class: C
) {
  // Define "anonymous" class
  return class extends Class {
    constructor(...args: any[]) {
      super(...args);
    }

    debug() {
      let name = Class.constructor.name;
      let value = this.getDebugValue();
      return name + "(" + JSON.stringify(value) + ")";
    }
  };
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}

  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + " " + this.lastName,
    };
  }
}

// Wrap the mixin function around the class
let User = withEasyDebug(HardToDebugUser);

let user = new User(3, "Josh", "Newham");

console.log(user.debug());
