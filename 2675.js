const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = input[0];

for (let i = 1; i <= testCase; i++) {
  let newString = "";
  let repeatCount = input[i].split(" ")[0];
  let string = input[i].split(" ")[1];
  for (let j = 0; j < string.length; j++) {
    for (let k = 0; k < repeatCount; k++) {
      newString += string[j];
    }
  }
  console.log(newString);
}
