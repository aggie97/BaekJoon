const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i = 1; i <= parseInt(input[0]); i++){
  let a = parseInt(input[i].split(' ')[0]);
  let b = parseInt(input[i].split(' ')[1]);
  console.log(`Case #${i}: ${a + b}`);
}
