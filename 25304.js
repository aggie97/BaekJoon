const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const [totalCost, totalAmount, ...products] = inputData;

const reciept = Number(totalCost);
let sum = 0;
for (let i = 0; i < totalAmount; i++) {
  const [cost, amount] = products[i].split(" ").map(Number);
  sum += cost * amount;
}

console.log(reciept === sum ? "Yes" : "No");
