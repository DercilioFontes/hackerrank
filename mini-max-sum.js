// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Complete this function
  var min = 0;
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    for(var j = 0; j <arr.length; j++) {
      // jumping one element of array each outer for loop.
      if (j === i) {
        continue;
      } else {
        sum += arr[j];
      }
    }
    if (min === 0) {
      min = sum;
    }
    if (sum < min)
      min = sum;
    if (sum > max)
      max = sum;
  }
  console.log(min + " " + max);
}

miniMaxSum([1, 2, 3, 4, 5]);