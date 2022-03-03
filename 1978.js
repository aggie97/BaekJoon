let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numCount = +input.shift();

input = input.split(" ");

let primCounter = 0;

const getPrimeNum = (num) => {
  if (num < 2) return;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return;
  }
  primCounter++;
};

for (let i = 0; i < numCount; i++) {
  getPrimeNum(input);
}

console.log(primCounter);
