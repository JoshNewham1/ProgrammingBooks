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
// Sum > 0 -> false
// Sum < 0 -> halt
