const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const B0 = B % 10;
const B1 = Math.floor((B % 100) / 10);
const B2 = Math.floor(B / 100);

console.log(A * B0);
console.log(A * B1);
console.log(A * B2);
console.log(A * B);

// console.log(A * Number(B.toString()[2]));
// console.log(A * Number(B.toString()[1]));
// console.log(A * Number(B.toString()[0]));
// console.log(
//   Number(B.toString()[2]) +
//     10 * Number(B.toString()[1]) +
//     100 * Number(B.toString()[0])
// );
