/* 문제 - 다음 소수

  정수 n (0 <= 4*10^9)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수를 찾는 프로그램을 작성하시오.
*/

/* 입력

  첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다.
*/

/* 출력

  각각의 테스트 케이스에 대해서 n보다 크거나 같은 소수 중 가장 작은 소수를 한 줄에 하나씩 출력한다.
*/

const fs = require("fs");

const [_N, ...numbers] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function isPrimeNum(num) {
  // if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let answer = "";

numbers.forEach((num) => {
  while (!isPrimeNum(num)) {
    num++;
  }
  answer += num + "\n";
});

console.log(answer.trimEnd());
