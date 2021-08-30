// Suppose you are a traveller on a 2D grid. You begin in the top-left corner
// and your goal is to travel to the bottom-right corner.
// You may only move down or right.
// In how many ways can you travel to the goal on an m * n grid?

// Base cases: m = 0 or n = 0 -> 0 ways to travel
// m = 1 or n = 1 -> 1 way to travel

//                                                       Visualised:
//                                                         t(2,3)
//                                                    down        right
//                                                   t(1,3)       t(2,2)
//                                                   0      1       1      1
//                                        1 BASE  t(0,3) t(1,2)  t(1,2) t(2,1)
//                                                        0   0     0     0
//                                        ALL BASE     t(0,2) t(1,1) ...

// The solution is simply the sum of these return values
