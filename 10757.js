const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const result = A + B;

console.log(String(result));
