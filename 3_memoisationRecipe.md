# Memoisation Recipe

1. Make it work
   - **Visualise** the problem as a tree
     - Encode changing arguments into nodes
     - Each edge should shrink the problem size
     - Look for patterns to optimise (e.g. repeated subtrees)
   - **Implement** the tree using recursion
     - Figure out base cases
     - Figure out correct recursive behaviour
   - **Test** it for correctness
2. Make it efficient
   - Add a memo object/hash map
     - Needs to be initialised in top level call and passed down to each recursive call
   - Add a base case to return memo values
   - Store return values
