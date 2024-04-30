/*문제

  N*M 크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.
*/

/*입력

  첫째 줄에 행렬의 크기 N과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다.
  이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고,
  행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.
*/

/*출력 

  첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.
*/

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

const size = Number(input.split("\n")[0].split(" ")[0]);
const matrixA = [],
  matrixB = [];

input.split("\n").forEach((v, i) => {
  if (i === 0) return;
  const row = v.split(" ").map(Number);
  if (i > size) {
    matrixB.push(row);
    return;
  }
  matrixA.push(row);
});

const answer = matrixA.reduce((acc, cur, rowIdx) => {
  acc.push(cur.map((v, colIdx) => v + matrixB[rowIdx][colIdx]));
  return acc;
}, []);

console.log(answer.join("\n").trim().replaceAll(",", " "));
