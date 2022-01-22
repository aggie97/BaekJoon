const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let result = '';

function N(){
  for(let i = parseInt(input[0]); i > 0; i--){
    result += i + '\n';
  }
  console.log(result);
}

N();