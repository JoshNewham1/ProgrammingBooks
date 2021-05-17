// Types can be extended with extra properties
// i.e. the type U should be at least the type T plus extra properties

// e.g. implementing a binary tree
// We have regular nodes without children, leaves, and nodes with children
type TreeNode = {
  value: string;
};

type LeafNode = TreeNode & {
  isLeaf: true; // Always true
};

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

let a: TreeNode = { value: "a" };
let b: LeafNode = { value: "b", isLeaf: true };
let c: InnerNode = { value: "c", children: [b] };

// Map node takes in any subtype of TreeNode, performs a function on the value, and returns the same subtype
// Note that the extends keyword ensures that the type has inherited TreeNode and that "value" is available
function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return { ...node, value: f(node.value) };
}

// This works just as well with multiple constraints using &
type HasSides = { numberOfSides: number };
type SidesHaveLength = { sideLength: number };

function logPerimeter<Shape extends HasSides & SidesHaveLength>(
  s: Shape
): void {
  const perimeter = s.numberOfSides * s.sideLength;
  console.log(perimeter);
}

// This is particularly useful when a function has a variable number of arguments (variadic)
function callWithoutGenerics(
  f: (...args: unknown[]) => unknown, // Any function that takes any number of arguments
  ...args: unknown[] // Any arguments
): unknown {
  return f(...args);
}

// Need T for the input arguments to function, R for the output of the inner function f
// and the call function
function callWithGenerics<T extends unknown, R>(
  f: (...args: T[]) => R,
  ...args: T[]
): R {
  return f(...args);
}

callWithGenerics(logPerimeter, { numberOfSides: 4, sideLength: 10 });

// Finally, generics can be supplied default types
type MyEventDefault<T = HTMLElement> = {
  target: T;
  type: string;
};

// Or for even more safety, we can extend and then set a default
type MyEventDefault2<T extends HTMLElement = HTMLElement> = {
  target: T;
  type: string;
};

// Multiple types can be defaulted, with non-optional ones always coming first
type MyEventDefault3<
  Type extends string,
  Target extends HTMLElement = HTMLElement
> = {
  target: Target;
  type: Type;
};
