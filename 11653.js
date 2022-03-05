let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let num = parseInt(input[0]);

let i = 2;
let primes = [];
while (true) {
  if (num % i === 0) {
    num = num / i;
    primes.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}

console.log(primes.join("\n"));

// 시간 초과 뜬 나의 답...

// let input = require("fs").readFileSync("/dev/stdin").toString() * 1;

// let primeNum = [];

// const getPrimeNum = (num) => {
//   if (num < 2) return;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return;
//   }
//   primeNum.push(num);
// };

// for (let i = 2; i <= input / 2; i++) {
//   getPrimeNum(i);
// }

// let i = 0;

// while (input > 1) {
//   if (input % primeNum[i] !== 0) i++;
//   else {
//     input = input / primeNum[i];
//     console.log(primeNum[i]);
//   }
// }
