const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let num = Number(input[0]);
let value = 1;

while (true) {
  num = num - value;
  if (num <= 0) {
    num = num + value;
    break;
  }

  value++;
}

const child = value % 2 === 1 ? value - (num - 1) : 1 + (num - 1);
const parent = value % 2 === 1 ? 1 + (num - 1) : value - (num - 1);

console.log(child + "/" + parent);

// 시간 초과한 내 답

// let a = 1;
// let b = 1;
// let sum = 2;
// let count = 0;

// let direct = true;

// while (count !== parseInt(input[0])) {
//   count++;

//   if (count === parseInt(input[0])) {
//     break;
//   }

//   if (direct) {
//     a--;
//     b++;
//     if (a < 1) {
//       a = 1;
//       sum++;
//       b = sum - a;
//       direct = !direct;
//     }
//   } else {
//     a++;
//     b--;
//     if (b < 1) {
//       b = 1;
//       sum++;
//       a = sum - b;
//       direct = !direct;
//     }
//   }
// }

// console.log(`${a}/${b}`);
