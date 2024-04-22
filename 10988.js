/*  문제

  알파벳 소문자로만 이루어진 단어가 주어진다. 이때, 이 단어가 팰린드롬인지 아닌지
  확인하는 프로그램을 작성하시오.

  팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다.

  level, noon은 팰린드롬이고, baekjoon, online, judge는 팰린드롬이 아니다.
*/

/* 입력

  첫째 줄에 단어가 주어진다. 단어의 길이는 1보다 크거나 같고, 100보다 작거나 같으며,
  알파벳 소문자로만 이루어져 있다.
*/

/* 출력 

  첫째 줄에 팰린드롬이면 1, 아니면 0을 출력한다.
*/

// const fs = require("fs");

// const input = fs.readFileSync("dev/stdin").toString();

// const length = input.length / 2;

// let answer = 1;

// for (let i = 0; i < length; i++) {
//   if (input[i] !== input.at(-1 - i)) {
//     answer--;
//     break;
//   }
// }

// console.log(answer);

// 1트 실패...

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim();

const length = input.length / 2;

const left = input.slice(0, length);
const right = input.slice(
  Number.isInteger(length) ? length : parseInt(length) + 1
);

console.log(left === right.split("").reverse().join("") ? 1 : 0);

// 5트만에 성공인데 문자열에 trim() 넣어야 하는 게 참... 흠..
