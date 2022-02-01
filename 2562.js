const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const max = Math.max(...input);

console.log(max);
console.log(input.findIndex(e => e == max) + 1);
