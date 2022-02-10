const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = [];

alphabet.forEach((char) => {
  input.includes(char) ? result.push(input.indexOf(char)) : result.push(-1);
});

console.log(result.join(" "));
