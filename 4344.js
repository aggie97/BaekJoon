const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = parseInt(input[0]);

for(let i = 1; i <= testCase; i++){
  let studentNum = parseInt(input[i][0]);
  let sum = 0;
  for(let j = 1; j <= studentNum; j++){
    sum += parseInt(input[i].split(' ')[j]);
  }
  let avg = sum / studentNum;
  let smart = input[i].split(' ').filter((score) => Number(score) > avg);
  console.log((smart.length / studentNum * 100).toFixed(3)+"%");
}