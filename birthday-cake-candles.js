// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
  /*
   * Write your code here.
   */
let greater = 0;
let nXGreater = 0;

for (let i = 0; i < n; i++) {
  if (ar[i] > greater) {
    greater = ar[i];
    nXGreater = 1;
  } else if (ar[i] === greater) {
    nXGreater++;
  }
}

return nXGreater;
}