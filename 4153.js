const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = [];

for (let i = 0; i < input.length; i++) {
  let sides = input[i].split(" ");
  sides = sides.map((v) => parseInt(v)).sort((a, b) => a - b);

  if (sides.every((num) => num === 0)) break;

  sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2
    ? result.push("right")
    : result.push("wrong");
}

console.log(result.join("\n"));
