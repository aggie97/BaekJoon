let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

let circle = [];
let answer = "<";
let count = 0;

for (let i = 1; i <= N; i++) {
  circle.push(i);
}

while (circle.length) {
  count++;
  if (count === K) {
    answer += circle.shift();
    if (circle.length) {
      answer += ", ";
      count = 0;
    } else {
      answer += ">";
    }
  } else {
    circle.push(circle.shift());
  }
}

console.log(answer);
