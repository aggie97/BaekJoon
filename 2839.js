const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let N = input[0];
let count = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + count);
    break;
  }

  if (0 > N) {
    console.log(-1);
    break;
  }

  count++;
  N -= 3;
}
