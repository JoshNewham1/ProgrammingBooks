// TS does not support a "final" keyword to make classes nonoverridable
// but it is easy to simulate using private constructors

class MessageQueue {
  private constructor(private messages: string[]) {}
}

// When a constructor is private, you can't new the class or extend it
class BadQueue extends MessageQueue {} // Invalid: constructor marked as private
let newQ = new MessageQueue(["a", "b", "c"]); // Invalid: constructor not accessible

// As we still want to be able to instantiate it, we add a static create() method
// to act as the constructor

class MessageQueue2 {
  private constructor(private messages: string[]) {}
  static create(messages: string[]) {
    return new MessageQueue2(messages);
  }
}

class BadQueue2 extends MessageQueue2 {} // Invalid: constructor marked as private
let newQ2 = MessageQueue2.create(["a", "b", "c"]); // Valid
