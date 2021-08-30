// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of elements that add up to the targetSum.
// If there is no such combination, return null.
// If there are many possible combinations, you may return a single one.
// You can use an element of the array as many times as needed.
// You may assume all numbers are non-negative.

//                                                       Visualised:
//                                                   howSum(7, [5,3,4,7])
//                                                          h(7)
//                                                   -5    -3    -4    -7
//                                                  h(2)  h(4)  h(3)  h(0)
//                                                    -  -3  -4   -3    -
//                                                      h(1) h(0) h(0)

//                                                 Return [3,4], [4,3] or [7]

// Base cases:
// targetSum = 0 -> []
// targetSum < 0 -> null

const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      // If there is at least one way to generate sum, do an early return
      return [...remainderResult, num];
    }
  }

  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14])); // very slow!
