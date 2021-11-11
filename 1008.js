const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseFloat(inputData[0]);
const B = parseFloat(inputData[1]);

console.log(A / B);
