/* 문제 - 너의 평점은

  인하대학교 컴퓨터공학과를 졸업하기 위해서는, 전공평점이 3.3 이상이거나 졸업고사를
  통과해야 한다. 그런데 아뿔싸, 치훈이는 깜빡하고 졸업고사를 응시하지 않았다는 사실을
  깨달았다!
  치훈이의 전공평점을 계산해주는 프로그램을 작성해보자.
  전공평점은 전공과목별 (학점 x 과목평점)의 합을 학점의 총합으로 나눈 값이다.
  인하대학교 컴퓨터공학과의 등급에 따른 과목평점은 다음 표와 같다.

  A+ 4.5
  A0 4.0
  B+ 3.5
  B0 3.0
  C+ 2.5
  C0 2.0
  D+ 1.5
  D0 1.0
  F  0.0

  P/F 과목의 경우 등급이 P 또는 F로 표시되는데, 등급이 P인 과목은 계산에서 제외
  치훈이는 무사히 졸업할 수 있을까?
*/

/* 입력

  20줄에 걸쳐 치훈이가 수강한 전공과목의 과목명, 학점, 등급이 공백으로 구분되어 주어짐.
*/

/* 출력

  치훈이의 전공평점을 출력.
  정답과의 절대오차 또는 상대오차가 10^-4 이하이면 정답으로 인정.
*/

const fs = require("fs");

const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .filter((val) => val.at(-1) !== "P")
  .map((val) => val.split(" "));

const scoreBoard = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalSubjectRating = 0;
let sum = 0;

for (let i = 0; i < input.length; i++) {
  const [_, subjectRating, grade] = input[i];
  sum += Number(subjectRating) * scoreBoard[grade];
  totalSubjectRating += Number(subjectRating);
}

console.log(sum / totalSubjectRating);
