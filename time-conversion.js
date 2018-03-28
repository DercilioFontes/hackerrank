// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  /*
   * Write your code here.
   */
  const arrString = s.split(':');

  let hh = arrString[0];
  let mm = arrString[1];
  let ss = arrString[2][0] + arrString[2][1];
  let ampm = arrString[2][2] + arrString[2][3];

  if (hh === '12' && ampm === 'AM') {
    hh = '00';
  }
  if (ampm === 'PM' && hh !== '12') {
    hh = (Number(hh) + 12).toString();
  }

  return `${hh}:${mm}:${ss}`;
}