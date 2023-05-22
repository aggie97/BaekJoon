// let input = require("fs").readFileSync("./dev/stdin").toString();
// let answer = 0;

// while (Number(input) > 0) {
//   // console.log(+input[0], +input[1], +input[2]);
//   for (let i = 1; i <= 4; i++) {
//     if (input.length === 3) {
//       if (+input[0] === +input[1] + i && +input[1] === +input[2] + i) {
//         // console.log(input);
//         answer++;
//       }
//     } else if (input.length === 2) {
//       if (+input[0] === +input[1] + i) {
//         console.log(input);
//         // console.log(input);
//         answer++;
//       }
//     } else {
//       answer++;
//       break;
//     }
//   }
//   input = String(+input - 1);
// }

// console.log(answer);

// let input = require("fs").readFileSync("./dev/stdin").toString();
// let count = 99;

// if (input < 100) count = input;
// else {
//   for (let i = 100; i <= input; i++) {
//     const temp = String(i).split("");
//     if (Number(temp[2]) - Number(temp[1]) === Number(temp[1]) - Number(temp[0]))
//       count++;
//   }
// }

// console.log(count);

let input = require("fs").readFileSync("./dev/stdin").toString();
let answer = 99;

if (+input >= 100) {
  for (let i = 100; i <= +input; i++) {
    const temp = [...(i + "")];
    if (+temp[2] - +temp[1] === +temp[1] - +temp[0]) answer++;
  }
} else {
  answer = input;
}

console.log(answer);
