/* 문제

  다음 연립방적식에서 x와 y의 값을 계산하시오.
  ax + by = c
  dx + ey = f
  a, b, c, d, e, f는 -999 부터 999 까지의 정수이다.
*/

/* 입력

  정수 a, b, c, d, e, f가 공백으로 구분되어 주어진다.
  문제에서 언급한 방정식을 만족하는 (x, y)가 유일하게 존재하고, 이 때 x와 y가 각각
  -999 이상 999 이하의 정수인 경우만 입력으로 주어짐이 보장된다.
*/

/* 출력

  문제의 답인 x와 y를 공백으로 구분해 출력한다.
*/

const fs = require("fs");

let [a, b, c, d, e, f] = fs
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

outer: for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x + " " + y);
      break outer;
    }
  }
}
