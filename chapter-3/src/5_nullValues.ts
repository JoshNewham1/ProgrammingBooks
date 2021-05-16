// TypeScript has types for null (absence of value) and undefined (not defined yet)
// and also adds "void" and "never"
// Void = return type of a function that completes but doesn't return anything
// Never = a function that never completes (due to error or infinite loop)

function func1(x: number) {
  // Returns number or null
  if (x < 10) {
    return x;
  } else {
    return null;
  }
}

function func2() {
  // Returns undefined
  return undefined;
}

function func3() {
  // Returns void
  let a = 2 + 2;
  let b = a * a;
}

function func4() {
  // Returns never
  throw TypeError("I always error");
}

function func5() {
  // Also returns never
  let a = 1;
  while (true) {
    a++;
  }
}

// Note: unknown is the supertype of every type and never is the bottom-most subtype
