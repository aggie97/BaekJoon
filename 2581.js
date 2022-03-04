let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const primNumArr = [];
let primeSum = 0;

const getPrimeNum = (num) => {
  if (num < 2) return;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return;
  }
  primNumArr.push(num);
  primeSum += num;
};

const start = parseInt(input[0]);
const end = parseInt(input[1]);

for (let i = start; i <= end; i++) {
  getPrimeNum(i);
}

if (!primNumArr.length) {
  console.log(-1);
} else {
  console.log(primeSum + "\n" + Math.min(...primNumArr));
}

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// let M = parseInt(input[0]);
// let N = parseInt(+input[1]);

// const solution = (small, big) => {
//   let numArray = [];

//   for (let i = 0; i <= big - small; i++) {
//     numArray[i] = small + i;
//   }

//   let primeNumArray = numArray.filter((num) => {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   });

//   let sum = primeNumArray.reduce((a, b) => a + b);
//   let minimum = Math.min(...primeNumArray);

//   return sum + "\n" + minimum;
// };

// console.log(solution(M, N));
