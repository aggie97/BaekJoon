/* 문제

  별 찍기 - 7
*/

/* 입력

  첫째 줄에 N(1 <= N <= 100)이 주어진다.
*/

/* 출력

  첫째 줄부터 2 x N-1 번째 줄까지 차례대로 별을 출력한다.
*/

const fs = require("fs");

const N = +fs.readFileSync("dev/stdin").toString();

for (let i = 1; i < N; i++) {
  let whiteSpace = " ".repeat(N - i);
  let stars = "*".repeat(i + i - 1);
  console.log(whiteSpace + stars);
}

for (let i = N; i > 0; i--) {
  let whiteSpace = " ".repeat(N - i);
  let stars = "*".repeat(i + i - 1);
  console.log(whiteSpace + stars);
}
