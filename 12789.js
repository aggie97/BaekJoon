/* 문제 - 도키도키 간식드리미

  사람들은 현재 1열로 줄을 서있고, 맨 앞의 사람만 이동이 가능하다. 인규는 번호표 순서대로만 통과할 수 있는 라인을
  만들어 두었다. 이 라인과 대기열의 맨 앞 사람 사이에는 한 사람씩 1열이 들어갈 수 있는 공간이 있다.
  현재 대기열의 사람들은 이 공간으로 올 수 있지만 반대는 불가능하다. 승환이를 도와 프로그램을 완성하라.
*/

/* 입력

  입력의 첫째 줄에는 현재 승환이의 앞에 서 있는 학생들의 수 N (1 <= N <= 1,000,자연수)이 주어진다.
  다음 줄에는 승환이 앞에 서 있는 모든 학생들의 번호표 (1, 2, ..., N) 순서가 앞에서부터 뒤 순서로 주어진다.
*/

/* 출력

  승환이가 무사히 간식을 받을 수 있으면 "Nice"를 출력하고 그렇지 않다면 "Sad"를 출력한다.
*/

const fs = require("fs");

const [N, ...currentLine] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .flatMap((el) => el.split(" ").map(Number));

currentLine.reverse();

const counter = [];
const tempLine = [];
let numberTicket = Math.min(...tempLine, ...currentLine);

do {
  if (currentLine.length === 0 && tempLine.at(-1) !== numberTicket) break;

  if (currentLine.at(-1) === numberTicket) {
    counter.push(currentLine.pop());
  } else if (tempLine.at(-1) === numberTicket) {
    counter.push(tempLine.pop());
  } else {
    tempLine.push(currentLine.pop());
  }
  numberTicket = Math.min(...tempLine, ...currentLine);
} while (currentLine.length > 0 || tempLine.length > 0);

tempLine.length > 0 ? console.log("Sad") : console.log("Nice");
