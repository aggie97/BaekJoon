let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = [];

for (let input of inputs) {
  while (true) {
    if (input.includes("()")) {
      input = input.split("()").join("");
    } else break;
  }
  result.push(input);
}

result = result.map((v) => (v.length > 0 ? "NO" : "YES"));
console.log(result.join("\n"));
