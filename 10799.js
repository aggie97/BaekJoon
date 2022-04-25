let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let stack = [];

let fragments = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push(input[i]);
  } else {
    if (input[i - 1] === "(") {
      stack.pop();
      fragments += stack.length;
    } else {
      stack.pop();
      fragments++;
    }
  }
}

console.log(fragments);
