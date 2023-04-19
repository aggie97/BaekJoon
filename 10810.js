const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = inputData[0].split(" ");

const basket = new Array(N);
const cases = [];

for (let i = 1; i < inputData.length; i++) {
  cases.push(inputData[i].split(" ").map(Number));
}

for (let i = 0; i < M; i++) {
  const [start, end, num] = cases[i];
  for (let j = start; j <= end; j++) {
    basket[j] = num;
  }
}

console.log(basket);
