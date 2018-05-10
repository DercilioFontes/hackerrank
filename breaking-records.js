
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(score) {
  /*
   * Write your code here.
   */
  let max = score[0];
  let min = score[0];
  let countMax = 0;
  let countMin = 0;
  for(let i=1; i < score.length; i++) {
    if(score[i] > max) {
      max = score[i];
      countMax++;
    }
    if(score[i] < min) {
      min = score[i];
      countMin++;
    }
  }
 
  return [countMax, countMin];
}

const score = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];