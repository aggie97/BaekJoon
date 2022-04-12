let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = [];

for (let input of inputs) {
  while (input.includes("()")) {
    input = input.split("()").join("");
  }
  result.push(input);
}

result = result.map((v) => (v.length > 0 ? "NO" : "YES"));
console.log(result.join("\n"));
