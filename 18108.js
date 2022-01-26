const fs = require('fs');

const y = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(parseInt(y) - 543);