const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const word = input[0];

let result = word
  .toUpperCase()
  .split("")
  .reduce((letters, letter) => {
    if (letter in letters) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
    return letters;
  }, {});

const numArray = Object.values(result).toString().split(",");

const maxCount = Math.max(...Object.values(result).toString().split(","));

let count = 0;
for (const num of numArray) {
  if (num == maxCount) {
    count++;
  }
}

let max = 0;
let symbol;

for (const key in result) {
  if (result[key] > max) {
    max = result[key];
    symbol = key;
  }
}

console.log(count > 1 ? "?" : symbol);
