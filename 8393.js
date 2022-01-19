const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

function factorial(n){
  if(n <= 1) return 1;
  return n + factorial(n - 1);
}

console.log(factorial(parseInt(inputData)));