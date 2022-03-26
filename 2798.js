const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);

let cardNumArr = [];
let max = 0;

for (let i = 0; i < N; i++) {
  cardNumArr.push(input[1].split(" ")[i]);
}

cardNumArr = cardNumArr.map((num) => parseInt(num));

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cardNumArr[i] + cardNumArr[j] + cardNumArr[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
    }
  }
}

console.log(max);
