// Note: one major difference between TS and other OOP languages
// is that it compares classes by their structure and not their name

// e.g. if two different classes implement the same method with the same type
// objects of either can be passed into a function

class Zebra {
  trot(): void {
    console.info("Zebra trotting");
  }
}

class Poodle {
  trot(): void {
    console.info("Poodle trotting");
  }
}

function moveAbout(animal: Zebra) {
  animal.trot();
}

let z = new Zebra();
let p = new Poodle();

moveAbout(z); // Expected
moveAbout(p); // Also OK

// This rule is only broken with private or protected fields
// If the class has private/protected fields, and is not an instance or subclass
// of the expected class, TS will throw an error
class Base {
  private x = 1;
}

class Extended extends Base {}

class NotBase {
  private x = 1;
}

function helloBase(b: Base) {}

let b = new Base();
let e = new Extended();
let nb = new NotBase();

helloBase(b);
helloBase(e);
helloBase(nb);
