const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let cycle = 0;

let num = parseInt(input[0]);
let result = 0;

do {
  cycle++;
  
  let ten = parseInt(num / 10) === 0 ? 0 : parseInt(num / 10);
  let one = num % 10;
  result = ten + one;

  let result_one = result % 10;

  num = parseInt(one.toString() + result_one.toString());

} while(parseInt(input[0]) !== num);

console.log(cycle);