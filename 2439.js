const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const count = parseInt(input[0]);
let star = '';

for(let k = 0; k < count; k++){
  star = '';

  for(let i = 0; i < count - (k + 1); i++){
    star += ' ';
  }
  
  for(let j = 0; j < k + 1; j++){
    star += '*';
  }

  console.log(star);
}

// 다시 풀어보자....