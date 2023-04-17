const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(inputData.map(Number).reduce((a, b) => a + b, 0));
