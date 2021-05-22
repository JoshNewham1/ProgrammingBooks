// 2. What happens when a class's constructor is "protected"?
class MyProtectedClass {
  protected constructor(hello: string) {}
}

class MyExtendedProtectedClass extends MyProtectedClass {
  constructor(world: string) {
    super(world);
  }
}

let extendedProtected = new MyExtendedProtectedClass();
let extended = new MyProtectedClass("world");

// The class can now be extended and instantiated but not directly instantiated

// 3. Extend the implementation of the Shoe Factory so that the return type is the shoe type
type Shoe2 = {
  create(type: "balletFlat"): BalletFlat;
  create(type: "boot"): Boot;
  create(type: "trainers"): Trainers;
};
let ShoeFactory2: Shoe2 = {
  create(type) {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "trainers":
        return new Trainers();
    }
  },
};

let myBoots2 = ShoeFactory2.create("boot"); // Of type "Boot" instead of "Shoe"

// 4. Create a type-safe builder that doesn't allow the methods to be called in any order

// This can be achieved by having multiple classes with different attributes and methods
// that are returned by the builder's methods

class RequestBuilder2 {
  // Attributes need to be protected so they can be
  // modified by subclasses
  protected url: string | null = null;
  protected data: object | null = null;
  protected method: string | null = null;

  // setData() must be called first
  setData(data: object | null): this {
    this.data = data;
    return this;
  }

  // Next stage in the chain, setMethod()
  setMethod(method: "get" | "post"): RequestBuilderWithMethod {
    return new RequestBuilderWithMethod().setMethod(method).setData(this.data);
  }
}

class RequestBuilderWithMethod extends RequestBuilder2 {
  setMethod(method: "get" | "post" | null): this {
    this.method = method;
    return this;
  }

  // Next stage in the chain, setURL()
  setURL(url: string): RequestBuilderWithMethodAndURL {
    return new RequestBuilderWithMethodAndURL()
      .setMethod(this.method)
      .setData(this.data)
      .setURL(url);
  }
}

class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod {
  setURL(url: string): this {
    this.url = url;
    return this;
  }

  // Next stage in the chain, send()
  send(): void {
    // Send it
  }
}

new RequestBuilder2().send().setMethod("post");
new RequestBuilder2()
  .setMethod("get")
  .setData({ hello: "world" })
  .setURL("www.google.com")
  .send();
