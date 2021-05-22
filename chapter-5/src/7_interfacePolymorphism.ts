// Like functions and types, classes and interfaces have support for generic types
// allowing for polymorphism

// e.g. a Map class that can support any type
interface IMyMap<K, V> {
  get(key: K): V;
  set(key: K, value: V): void;
}

class MyMap<K, V> implements IMyMap<K, V> {
  // Cannot declare generic types in constructor, has to be in class definition
  constructor(initialKey: K, initialValue: V) {}

  // Use class-scoped generics whenever possible
  get(key: K): V {}
  set(key: K, value: V) {}

  // Instance methods have access to class-level generics and can define their own
  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {}

  // Static methods do not have access to class level generics, so must define their own
  static of<K, V>(k: K, v: V): MyMap<K, V> {}
}
