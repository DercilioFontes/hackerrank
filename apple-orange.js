
// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countFruits(startHouse, endHouse, treePosition, arrayOfFruit) {
  let counter = 0;
  for(const fruit of arrayOfFruit) {
    const fruitPosition = treePosition + fruit;
    if(fruitPosition >= startHouse && fruitPosition <= endHouse) {
      counter++;
    }
  }
  console.log(counter);
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  /*
   * Write your code here.
   */

  // count apples within the house and console.log
  countFruits(s, t, a, apples);

  // count oranges within the house and console.log
  countFruits(s, t, b, oranges);
}


countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);