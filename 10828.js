let [N, ...orderList] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const myStack = [];

let answer = "";

const putCustomStack = (order) => {
  switch (order) {
    default:
      myStack.push(order.split(" ")[1]);
      break;

    case "pop":
      myStack.length === 0
        ? (answer += "-1\n")
        : (answer += `${myStack.pop()}\n`);
      break;

    case "size":
      answer += `${myStack.length}\n`;
      break;

    case "empty":
      myStack.length === 0 ? (answer += "1\n") : (answer += "0\n");
      break;

    case "top":
      myStack.length === 0
        ? (answer += "-1\n")
        : (answer += `${myStack[myStack.length - 1]}\n`);
      break;
  }
};

for (let i = 0; i < N; i++) {
  putCustomStack(orderList[i]);
}

console.log(answer.trim());
