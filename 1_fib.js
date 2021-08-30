// Dynamic programming = decomposing a problem into smaller instances of itself with overlapping elements

// Classic recursive fib - O(2^n) time as results in a binary tree of two function calls per pass
//        fib(7)             1 node
//    f(6)      f(5)         2 nodes
// f(5) f(4)  f(4) f(3)      4 nodes
// ...                       2^n nodes
// O(n) space as stack frames are popped when base case of one branch is reached
// Note that some of these function calls are reused further down the tree (e.g. fib(5)) -> overlapping subtrees
const fib = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

// Memoisation - storing results from overlapping subproblems to avoid re-evaluation
// Will use a JS object with keys = function args and value = return value
const fibMemoised = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemoised(n - 1, memo) + fibMemoised(n - 2, memo); // Save result if it doesn't exist
  return memo[n];
};

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50)); // very slow! (about a quadrillion steps)

console.log(fibMemoised(6));
console.log(fibMemoised(7));
console.log(fibMemoised(8));
console.log(fibMemoised(50)); // much faster
