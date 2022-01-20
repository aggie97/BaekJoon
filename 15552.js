const fs = require('fs');

let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = '';

for(let i = 1; i <= inputData[0] ; i++){
  let AB = inputData[i].split(' ');
  answer += parseInt(AB[0]) + parseInt(AB[1]) + '\n';
}

console.log(answer);
