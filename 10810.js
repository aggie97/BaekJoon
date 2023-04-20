const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = inputData[0].split(" ");

const basket = new Array(Number(N)).fill(0);
const cases = [];

for (let i = 1; i < inputData.length; i++) {
  cases.push(inputData[i].split(" ").map(Number));
}

for (let i = 0; i < M; i++) {
  const [start, end, num] = cases[i];
  for (let j = start - 1; j <= end - 1; j++) {
    basket[j] = num;
  }
}

console.log(basket.join(" "));
