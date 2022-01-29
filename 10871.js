const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const X = parseInt(input[0].split(' ')[1]);

const numListA = (input[1].split(' ').length == N) ? input[1].split(' ') : null;

for(let i = 0; i < numListA.length; i++){
  if(numListA[i] < X){
    const answer = numListA.filter(e => e < X);
    console.log(answer.join(' '));
    break;
  }
}