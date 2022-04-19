const [N, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let deque = [];
let answer = [];

commands.forEach((command) => {
  const [cmd, data] = command.split(" ");
  switch (cmd) {
    case "push_front":
      deque.unshift(+data);
      break;
    case "push_back":
      deque.push(+data);
      break;
    case "pop_front":
      answer.push(deque.length > 0 ? deque.shift() : -1);
      break;
    case "pop_back":
      answer.push(deque.length > 0 ? deque.pop() : -1);
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(deque.length > 0 ? 0 : 1);
      break;
    case "front":
      answer.push(deque.length > 0 ? deque[0] : -1);
      break;
    case "back":
      answer.push(deque.length > 0 ? deque[deque.length - 1] : -1);
      break;
  }
});

console.log(answer.join("\n"));
