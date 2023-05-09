// take in target sum and an array of numbers, return how the numbers can be
// summed to the target number

const howSum = (target, numbersArray, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }

  if (target === 0) {
    return [];
  }

  if (target < 0) {
    return null;
  }

  for (let n of numbersArray) {
    const remainder = target - n;
    const remainderResult = howSum(remainder, numbersArray, memo);

    if (remainderResult !== null) {
      memo[target] = [...remainderResult, n];
      return memo[target];
    }
  }

  memo[target] = null;
  return memo[target];
};

console.log(howSum(7, [5, 3, 4, 7])); // [3,4]
console.log(howSum(7, [1, 2, 4])); // true
console.log(howSum(7, [2, 3])); // true
console.log(howSum(7, [2, 4])); // false
console.log(howSum(300, [7, 14])); // false
