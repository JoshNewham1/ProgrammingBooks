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
// targetSum != 0 -> null
