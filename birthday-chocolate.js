
// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function solve(n, s, d, m){
  // Complete this function
  if(n >= m) {
    let counter = 0;
    let indexStart = 0;
    while(n >= m) {
      let sum = 0;
      let indexEnd = indexStart + m;
      for(let i = indexStart; i < indexEnd; i++) {
        sum += s[i];
      }
      if(sum === d) {
        counter++;
      }
      indexStart++;
      n--;
    }
    return counter;
  } else {
    return 0;
  }
}

const n = 5;
const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

console.log(solve(n, s, d, m));