const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;
while(true){
  let A = parseInt(input[i].split(' ')[0]);
  let B = parseInt(input[i].split(' ')[1]);

  if((A === 0) && (B === 0)) break;

  console.log(A + B);
  i++;
}