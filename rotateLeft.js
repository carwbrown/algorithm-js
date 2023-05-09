// given an array and an amount to be moved
// move the array's element that amount to the left
// ([1, 2, 3, 4, 5], 1) => [2, 3, 4, 5, 1]

const rotLeft = (origArray, movement) => {
  const newArr = [];
  for (let i = 0; i < origArray.length; i++) {
    if (movement + i > origArray.length - 1) {
      newArr[i] = origArray[movement + i - origArray.length];
    } else {
      newArr[i] = origArray[movement + i];
    }
  }
  return newArr;
};

console.log("1: ", rotLeft([1, 2, 3, 4, 5], 1));
console.log(
  "2: ",
  rotLeft(
    [
      41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
      51,
    ],
    10,
  ),
);
console.log(
  "3: ",
  rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13),
);
