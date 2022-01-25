const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let result = '*';

for(let i = 1; i <= input[0]; i++){
  console.log(result);
  result += '*';
}