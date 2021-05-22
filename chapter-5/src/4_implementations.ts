// When declaring a class, the "implements" keyword can be used to
// ensure the class conforms to an interface
interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

// This class must implement eat(string) and sleep(number)
// and then can implement anything extra
class Cat implements Animal {
  name = "Whiskers";

  // Must return void as per the interface
  eat(food: string) {
    console.info("Ate some", food, ". mmmm!");
  }

  sleep(hours: number) {
    console.info("Slept for " + hours + " hours.");
  }
}

let myCat: Cat = new Cat();
myCat.eat("cat food");
myCat.sleep(12);

// Classes can also extend multiple interfaces (this allows multiple inheritance)
interface Feline {
  meow(): void;
}

class Cat2 implements Cat, Feline {
  name = "Whiskers";

  // Must return void as per the interface
  eat(food: string) {
    console.info("Ate some", food, ". mmmm!");
  }

  sleep(hours: number) {
    console.info("Slept for " + hours + " hours.");
  }

  meow() {
    console.info("Meow");
  }
}

// This is very similar to an abstract class, except an interface can be used
// to model a shape (and used for arrays, classes, objects and functions)
// where an abstract class can only be used to model a class

// Abstract classes are better suited when an implementation is shared across multiple classes
// as they provide default methods for the constructor etc.
// and an interface is better as a lightweight way to ensure a class conforms to a signature
