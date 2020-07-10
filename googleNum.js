/*

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const addUp = (array, number) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (j = 1 + i; j < array.length; j++) {
      if (array[i] + array[j] === number) {
        return true;
      }
    }
  }

  return false;
};

console.log(addUp([10, 15, 3, 7], 17));
console.log(addUp([10, 15, 3, 7], 13));
console.log(addUp([10, 15, 3, 7], 99));
console.log(addUp([10, 15, 3, 7], 18));
console.log(addUp([10, 15, 3, 7], 10));
console.log(addUp([10, 15, 3, 7], 15));
console.log(addUp([1, -4, 8, 10], 6));
