/* 문제

  단어 길이 재기
*/

/* 입력

  알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.
*/

// 1트

// const fs = require("fs");

// const input = fs.readFileSync("dev/stdin").toString();

// console.log(input.length);

// 오답. ????? 왜 틀렸지...? 공백이 있나?

// 2트

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim();

console.log(input.length);

// 정답. 공백 제거... 유의..
