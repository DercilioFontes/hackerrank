
// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  // // Complete this function

  if(v1 > v2) {
    while(x1 <= x2) {
      if(x1 === x2) {
        return 'YES';
      }
      x1 += v1;
      x2 += v2;
    }
    return 'NO';
  } else {
    return 'NO';
  }
  
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));