const [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nums = inputs.map((v) => parseInt(v));

const stack = [];
let answer = [];
let count = 1;

for (let i = 0; i < N; i++) {
  const num = nums.shift();

  while (count <= num) {
    stack.push(count);
    count++;
    answer.push("+");
  }

  const pop = stack.pop();
  if (pop !== num) {
    answer = ["NO"];
    break;
  }
  answer.push("-");
}

console.log(answer.join("\n"));

// 문제 이해 능력.... shit..
