// "this" can be used as both a value and a return type in TS

// e.g. an implementation of the Set class
class MySet {
  protected set: number[];
  constructor() {
    this.set = [];
  }
  has(value: number): boolean {
    if (this.set.includes(value)) {
      return true;
    } else {
      return false;
    }
  }
  add(value: number): MySet {
    this.set.push(value);
    return this;
  }
}

// This works fine, but extending MySet would require always overriding
// add() to return the correct type
class MySet2 {
  protected set: number[];
  constructor() {
    this.set = [];
  }
  has(value: number): boolean {
    if (this.set.includes(value)) {
      return true;
    } else {
      return false;
    }
  }
  add(value: number): this {
    this.set.push(value);
    return this;
  }
}

// Now I'm returning "this", it can be extended without re-implementing add()
class MutableSet extends MySet2 {
  delete(value: number): boolean {
    let indexToDelete: number;
    indexToDelete = this.set.indexOf(value);
    if (indexToDelete !== -1) {
      this.set.splice(indexToDelete, 1);
      return true;
    } else {
      return false;
    }
  }
}

// Note: this is very useful for "chained APIs"
