const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = parseInt(input);
let num = 665;

while (N > 0) {
  num++;

  if (num.toString().includes("666")) {
    N--;
  }
}

console.log(num);
