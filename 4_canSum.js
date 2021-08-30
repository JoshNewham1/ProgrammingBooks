// Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
// The function should return a boolean indicating whether it is possible to generate the targetSum from
// the numbers in the array.
// You can use an element of the array as many times as needed.
// You may assume all numbers are non-negative.

//                                                       Visualised:
//                                                   canSum(7, [5,3,4,7])
//                                                          c(7)
//                                                   -5    -3    -4    -7
//                                                  c(2)  c(4)  c(3)  c(0)
//                                                    -  -3  -4   -3    -
//                                                      c(1) c(0) c(0)

// Base cases:
// Any node has 0 sum -> true
// Sum < 0 -> false (and carried up the tree)

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  // Try subtracting all numbers from total
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) {
      return true;
    }
  }
  // Only impossible to generate target sum AFTER trying all possibilities
  return false;
};

// Complexity: let m = target sum, n = numbers array length
// Maximum (theoretical) height of the tree = m -> if 1 is in numbers array
// Maximum number of branches per node = n (branching factor)
// Therefore time complexity is O(n^m)

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
