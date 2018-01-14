// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  // Complete this function
  var string = "";
  for (var i = 0; i < n; i++) {
    for (var j = n - i; j > 1; j--) {
      string += " ";
    }
    for (var l = n; l >= n - i; l--) {
      string += "#";
    }
    if (i < n - 1)
      string += "\n";
  }
  console.log(string);
}

var n = 6;
staircase(n);