const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const result = input.map(num => num % 42).sort((a,b) => a-b);

let count = 0;

console.log(result);

for(let i = 0; i<result.length-1; i++){
    if(result[i] != result[i+1]) count++;
}

console.log(count+1);