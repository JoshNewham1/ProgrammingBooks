// 1. The factory pattern - way to create objects of some type, leaving the decision
// of which concrete object to create to the specific factory function that creates the object
// The idea is that the consumer shouldn't know which concrete class they are getting,
// just that it will satisfy a particular interface

type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "Dancing";
}

class Boot implements Shoe {
  purpose = "Woodcutting";
}

class Trainers implements Shoe {
  purpose = "Walking";
}

// Shoe factory
let Shoe = {
  create(type: "balletFlat" | "boot" | "trainer"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "trainer":
        return new Trainers();
    }
  },
};

let myBoots = Shoe.create("boot");

// 2. The builder pattern - a way to separate the construction of an object from how it is implemented.
// Allows the chaining together of methods
class RequestBuilder {
  private url: string | null = null;
  private data: object | null = null;
  private method: string | null = null;

  // This pattern mainly revolves around changing and returning this
  // in all functions, and using private attributes
  setURL(url: string): this {
    this.url = url;
    return this;
  }
  setData(data: object): this {
    this.data = data;
    return this;
  }
  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }
  send(): void {
    // Send it
  }
}

// However, this pattern is not completely safe as send() could be called before
// setting the URL
