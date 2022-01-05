const fs = require('fs');

const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const N = parseInt(inputData[0]);

for(let i=1; i<10; i++){
  console.log(`${N} * ${i} = ${N * i}`);
}