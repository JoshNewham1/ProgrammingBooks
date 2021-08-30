// Suppose you are a traveller on a 2D grid. You begin in the top-left corner
// and your goal is to travel to the bottom-right corner.
// You may only move down or right.
// In how many ways can you travel to the goal on an m * n grid?

// Base cases: m = 0 or n = 0 -> 0 ways to travel
// m = 1 and n = 1 -> 1 way to travel

//                                                       Visualised:
//                                                         t(2,3)
//                                                    down        right
//                                                   t(1,3)       t(2,2)
//                                                   0      1       1      1
//                                        1 BASE  t(0,3) t(1,2)  t(1,2) t(2,1)
//                                                        0   0     0     0
//                                        ALL BASE     t(0,2) t(1,1) ...

// The solution is simply the sum of these return values

const gridTraveller = (m, n) => {
  // Base cases
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  // Sum all combinations of down and right:
  //          Move downwards           Move rightwards
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

// The height of the tree produced is m + n (as only m OR n can be decreased at a time)
// Therefore, time complexity of O(2^(m+n)) and space complexity of O(m+n)

// To optimise this, we can memoise and use the fact that traveller(a, b) = traveller(b, a)
const travellerMemoised = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] =
    travellerMemoised(m - 1, n, memo) + travellerMemoised(m, n - 1, memo);
  return memo[key];
};

// console.log(gridTraveller(1, 1));
// console.log(gridTraveller(2, 3));
// console.log(gridTraveller(3, 2));
// console.log(gridTraveller(3, 3));
// console.log(gridTraveller(18, 18)); // very slow!

console.log(travellerMemoised(1, 1));
console.log(travellerMemoised(2, 3));
console.log(travellerMemoised(3, 2));
console.log(travellerMemoised(3, 3));
console.log(travellerMemoised(18, 18));
