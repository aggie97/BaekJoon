const fs = require("fs");

const inputData = +fs.readFileSync("/dev/stdin").toString();

let answer = "";

for (let i = 0; i < inputData / 4; i++) {
  answer += "long ";
}

console.log(answer + "int");
