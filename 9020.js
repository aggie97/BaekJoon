const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const caseCount = parseInt(input.shift());

const min = 2;
const max = 10000;

let primeNum = [];

for (let i = min; i <= max; i++) {
  primeNum[i] = i;
}

for (let i = 2; i <= max; i++) {
  if (primeNum[i] === 0) continue;
  for (let j = i + i; j <= max; j += i) {
    primeNum[j] = 0;
  }
}

primeNum = primeNum.filter((num) => num !== 0);

for (let i = 0; i < caseCount; i++) {
  const num = parseInt(input[i]);

  let result = [];

  for (let j = 0; primeNum[j] < num / 2 + 1; j++) {
    const index = primeNum.indexOf(num - primeNum[j]);

    if (index !== -1) {
      result.push([primeNum[j], primeNum[index]]);
    }
  }

  if (result.length !== 0) {
    const a = result.pop();

    console.log(`${a[0]} ${a[1]}`);
  }
}
