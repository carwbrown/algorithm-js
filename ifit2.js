// Given an array find if 3 sequential numbers are in the following
// sequence n, n+1, n+2

function tripleThreat(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] + 1 === a[i + 1] && a[i] + 2 === a[i + 2]) {
      return 1;
    }
  }
  return 0;
}

console.log(tripleThreat([1, 2, 3]));
console.log(tripleThreat([1, 4, 3]));
console.log(tripleThreat([1, 4, 2, 3, 4, 888]));
console.log(tripleThreat([1, -4, -3, -2, 3, 4, 888]));
