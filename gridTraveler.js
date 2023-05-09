// say that you are on a 2D grid you begin in the top left and have to travel
// top the bottom right. you can only move down and to the right. you will be
// given the height and width of the grid

// draw a tree
//           (2,3)
//    (1,3)           (2,2)
//       (1,2)     (1,2)  (2,1)
//         (1,1)  (1,1)     (1,1)

// return the count of possible moves
const gridTraveler = (height, width, memo = {}) => {
  if (memo[`${height},${width}`]) {
    return memo[`${height},${width}`];
  }

  if (memo[`${width},${height}`]) {
    return memo[`${width},${height}`];
  }

  if (height === 0 || width === 0) {
    return 0;
  }

  if (height === 1 && width === 1) {
    return 1;
  }

  memo[`${height},${width}`] =
    gridTraveler(height - 1, width, memo) +
    gridTraveler(height, width - 1, memo);
  return memo[`${height},${width}`];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(0, 1)); // 0
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
