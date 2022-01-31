const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);

const num = input[1].split(' ').length == N ? input[1].split(' ').sort((a, b) => a - b) : null;

const min = num[0];
const max = num.pop();

console.log(`${min} ${max}`);
