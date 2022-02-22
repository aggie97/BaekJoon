const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const caseCount = parseInt(input[0]);

let count = 0;

for (let i = 1; i <= caseCount; i++) {
  const word = input[i];
  const countOnlyOnce = [];

  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (countOnlyOnce.indexOf(word[j]) === -1) countOnlyOnce.push(word[j]);
    else if (countOnlyOnce.indexOf(word[j]) !== countOnlyOnce.length - 1) {
      isGroupWord = false;
      break;
    }
  }

  if (isGroupWord) count++;
}

console.log(count);

// 다시 풀어보자...
