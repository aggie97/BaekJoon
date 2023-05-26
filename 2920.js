const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

if (input.every((num, i) => num === i + 1)) console.log("ascending");
else if (input.every((num, i) => num === 8 - i)) console.log("descending");
else console.log("mixed");
