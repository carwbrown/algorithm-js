// DCP #165
// Given an array of integers, return a new array where each element
// in the new array is the number of smaller elements to the right
// of that element in the original input array.

// For example, given the array [3, 4, 9, 6, 1],
// return [1, 1, 2, 1, 0], since:

//     There is 1 smaller element to the right of 3
//     There is 1 smaller element to the right of 4
//     There are 2 smaller elements to the right of 9
//     There is 1 smaller element to the right of 6
//     There are no smaller elements to the right of 1

const toTheRight = (arr) => {
  const result = [];
  for (let j = 0; j < arr.length; j++) {
    if (j === arr.length - 1) {
      result.push(0);
    } else {
      const restOfArray = arr.slice(j + 1, arr.length);
      result.push(restOfArray.filter((num) => arr[j] > num).length);
    }
  }
  return result;
};

console.log(toTheRight([3, 4, 9, 6, 1]));
