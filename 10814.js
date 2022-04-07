/* 나이가 증가하는 순으로, 나이가 같으면 가입한 순서로 정렬 */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

let memberInfo = input.map((memberInfo) => memberInfo.split(" "));

console.log(
  memberInfo
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .map((member) => `${member[0]} ${member[1]}`)
    .join("\n")
);
