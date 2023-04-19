const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const [length, nums, inputNum] = inputData;
const numArray = nums.split(" ").map(Number);
let answer = 0;
for (let i = 0; i < Number(length); i++) {
  if (numArray[i] === Number(inputNum)) answer++;
}
console.log(answer);
