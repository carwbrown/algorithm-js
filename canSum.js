// take in target sum and an array of numbers, return if the numbers can be
// summed to the target number

const canSum = (target, numbersArray, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }
  if (target === 0) {
    return true;
  }
  if (target < 0) {
    return false;
  }

  for (let n of numbersArray) {
    const remainder = target - n;
    if (canSum(remainder, numbersArray, memo) === true) {
      memo[target] = true;
      return memo[target];
    }
  }

  memo[target] = false;
  return memo[target];
};

console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [1, 2, 4])); // true
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(300, [7, 14])); // false
