const [N, ...text] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const words = text.map((sentence) =>
  sentence.split(" ").map((word) => word.split("").reverse())
);

let answer = "";

for (let i = 0; i < N; i++) {
  answer += words[i].map((words) => words.join("")).join(" ") + "\n";
}

console.log(answer.trim());
