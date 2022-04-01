const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const sortedArr = input.sort((a, b) => a - b);
let result = [];
for (const num of sortedArr) {
  if (!result.includes(num)) result.push(num);
}

console.log(result.join("\n"));
