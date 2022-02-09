const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const caseNum = input[0];

const nums = input[1].split("");

let result = 0;

for (let i = 0; i < caseNum; i++) {
  result += Number(nums[i]);
}

console.log(result);
