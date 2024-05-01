/*문제

  그림과 같이 9x9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 이들 중 최댓값을 찾고
  그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오.
*/

/*입력  

  첫째 주부터 아홉 번째 줄까지 한 줄에 아홉 개씩 수가 주어진다.
  주어지는 수는 100보다 작은 자연수 또는 0이다.
*/

/*출력

  첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 위치한 행 번호와 열 번호를 빈칸을 사이에 두고
  차례로 출력한다. 최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력한다.
*/

const fs = require("fs");

const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const len = input.length;
const answer = {
  num: 0,
  i: 1,
  j: 1,
};

for (let i = 0; i < len; i++) {
  if (answer.num >= Math.max(input[i])) continue;
  for (let j = 0; j < len; j++) {
    if (input[i][j] > answer.num) {
      answer.num = input[i][j];
      answer.i = i + 1;
      answer.j = j + 1;
    }
  }
}

console.log((answer.num + "\n" + answer.i + " " + answer.j).trim());
