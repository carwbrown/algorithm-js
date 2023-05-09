console.log("hello");

// Write a function fib(n) that takes a number as an argument. It should return
// the nth number of the argument
function fib(n, memo = {}) {
  if (n <= 2) {
    memo[n] = 1;
    return 1;
  }

  if (memo[n - 1]) {
    return memo[n - 1] + memo[n - 2];
  } else {
    memo[n - 1] = memo[n - 2] + memo[n - 3];
  }

  return fib(n - 1, memo) + fib(n - 2, memo);
}

function classicFib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

// fib(7) => 13
//       7
//     /   \
//    6     5
//  5  4   4  3
//           2  1

console.log(fib(6));
console.log(fib(7));
console.log(fib(13));
