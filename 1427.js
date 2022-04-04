const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(
  input
    .split("")
    .map((e) => parseInt(e))
    .sort((a, b) => b - a)
    .join("")
);
