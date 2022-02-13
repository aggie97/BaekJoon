const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const currentHour = parseInt(input[0].split(" ")[0]);
const currentMin = parseInt(input[0].split(" ")[1]);

const costMin = parseInt(input[1]);

const currentTotalMin = currentHour * 60 + currentMin;

const totalCost = currentTotalMin + costMin;

const resultHour =
  Math.floor(totalCost / 60) < 24
    ? Math.floor(totalCost / 60)
    : Math.floor(totalCost / 60) - 24;
const resultMin = totalCost % 60;

console.log(resultHour, resultMin);
