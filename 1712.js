const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const constCost = Number(input[0]);
const productionCost = Number(input[1]);
const productCost = Number(input[2]);

const margin = productCost - productionCost;
const count = Math.floor(constCost / margin) + 1;

console.log(margin <= 0 ? -1 : count);
