
// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // return array of rounded grades  
  // passing for each grade
  return grades.map( grade => {
     // check if < 38
    if(grade < 38) {
      return grade;
      // if >=38 and already multiple of 5
    } else if(grade % 5 === 0) {
      return grade;
    } else {
      // compare with near greater multiple of 5
      // if difference < 3, round to the multiple.
      // Obs: I used the remainder to do that
      while(grade % 5 >= 3) {
        grade++;
      }
      return grade;
    }
  });
 
}

const arrGrades = [73, 67, 38, 33];

console.log(gradingStudents(arrGrades));