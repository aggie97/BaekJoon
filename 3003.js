// 총 필요 개수 => 퀸: 1, 킹: 1, 룩: 2, 비숍: 2, 나이트: 2, 폰: 8
const total = [1, 1, 2, 2, 2, 8];
const answer = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map(Number)
  .map((piece, index) => total[index] - piece)
  .join(" ");

console.log(answer);
