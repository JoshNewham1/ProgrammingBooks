// Classic recursive fib - O(2^n) time as results in a binary tree of two function calls per pass
//        fib(7)             1 node
//    f(6)      f(5)         2 nodes
// f(5) f(4)  f(4) f(3)      4 nodes
// ...                       2^n nodes
// O(n) space as stack frames are popped when base case of one branch is reached
// Note that some of these function calls are reused further down the tree (e.g. fib(5))
const fib = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50)); // very slow! (about a quadrillion steps)
