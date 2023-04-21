const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const total = Array.from({ length: 30 }, (_, i) => i + 1);
inputData.sort((a, b) => a - b);

const answer = [];

for (let i = 0, count = 0; i < 30; i++) {
  if (total[i] !== inputData[i - count]) {
    answer.push(total[i]);
    count++;
  }
}
console.log(answer.join("\n"));

// 흠 왜 틀렸을까? inputData[i - count]가 존재하지 않는 값에 접근하려고 할 때 undefined가 뜨는데 이게 문제인가?

for (let i = 0; i < 30; i++) {
  if (!inputData.includes(total[i])) answer.push(total[i]);
}
console.log(answer.sort((a, b) => a - b).join("\n"));

// 메서드를 이용해 조금 더 간단하게 접근 방식을 바꿨다. 결과는 정답
