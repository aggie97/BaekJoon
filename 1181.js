let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const filteredArr = [];

input.forEach((word) => {
  if (!filteredArr.includes(word)) filteredArr.push(word);
});

filteredArr.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  } else if (a.length < b.length) {
    return -1;
  }
});

console.log(filteredArr.join("\n"));
