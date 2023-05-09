/*

Given an array of integers, return a new array such that
each element at index i of the new array is the product of
all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5],
the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

const arrProduct = (arr) => {
  const res = arr.map((_number, index) => {
    const workingArray = [...arr];
    workingArray.splice(index, 1);
    return workingArray.reduce((a, b) => a * b, 1);
  });

  return res;
};

console.log(arrProduct([1, 2, 3, 4, 5]));
console.log(arrProduct([3, 2, 1]));
