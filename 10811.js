const fs = require("fs");

const inputData = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = inputData[0].split(" ").map(Number);

const basket = Array.from({ length: N }, (_, i) => i + 1);
let temp = [];
for (let i = 1; i <= M; i++) {
  const [start, end] = inputData[i].split(" ").map(Number);

  temp = basket.slice(start - 1, end).reverse();

  basket.splice(start - 1, end - start + 1, ...temp);
}
console.log(basket.join(" "));
