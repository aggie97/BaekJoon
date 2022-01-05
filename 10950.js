const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCase = parseInt(inputData[0]);

for(let i=1; i<testCase+1; i++){
  let numbers = inputData[i].split(' ');
  console.log(Number(numbers[0]) + Number(numbers[1]));
}