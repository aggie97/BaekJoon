const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i = 1; i <= input[0]; i++){
  let AB = input[i].split(' ');
  console.log(`Case #${i}: ${AB[0]} + ${AB[1]} = ${parseInt(AB[0]) + parseInt(AB[1])}`);
}