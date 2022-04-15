const [N, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const myQue = [];

const answer = [];

for (let i = 0; i < N; i++) {
  const [cmd, value] = commands[i].split(" ");

  switch (cmd) {
    case "push":
      myQue.push(value);
      break;
    case "pop":
      answer.push(myQue.length > 0 ? myQue.shift() : "-1");
      break;
    case "size":
      answer.push(myQue.length);
      break;
    case "empty":
      answer.push(myQue.length > 0 ? "0" : "1");
      break;
    case "front":
      answer.push(myQue.length > 0 ? myQue[0] : "-1");
      break;
    case "back":
      answer.push(myQue.length > 0 ? myQue[myQue.length - 1] : "-1");
      break;
  }
}

console.log(answer.join("\n"));
