const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const sorted = input.sort((a, b) => a - b);
console.log(sorted.join("\n"));
