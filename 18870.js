// let [N, ...coordinates] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// coordinates = coordinates[0].split(" ").map((v) => parseInt(v));

// const result = [];

// const minimum = Math.min(...coordinates);

// coordinates.forEach((coor) => {
//   if (coor === minimum) {
//     result.push(0);
//     return;
//   } else {
//     let nums = [];
//     for (const num of coordinates) {
//       if (coor > num) {
//         if (nums.includes(num)) nums.pop();
//         else nums.push(num);
//       }
//     }

//     result.push(nums.length);
//   }
// });

// console.log(result.join(" "));

// 시간 초과... 아마 이중 for문이 원인인 듯..

let [N, ...coordinates] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

N = parseInt(N);
let arr = coordinates[0].split(" ").map((v) => +v);
let set = new Set(arr);
let unique = [...set].sort((a, b) => a - b);

let obj = {};

unique.forEach((num, index) => (obj[num] = index));

let answer = "";

for (let i = 0; i < N; i++) {
  answer += `${obj[arr[i]]} `;
}

console.log(answer);

// 다른 분 풀이 ㅠㅠ 이중 for문 이렇게 옵젝 + 인덱스 조합으로 풀어서 풀 수 있구나..
