/* 문제 - 골드바흐 파티션

  골드바흐의 추측 : 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
  짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다. 짝수 N이 주어졌을 때,
  골드바흐 파티션의 개수를 구해보자. 두 소수의 순서만 다른 것은 같은 파티션이다.
*/

/* 입력

  첫째 줄에 테스트 케이스의 개수 T (1 <= T <= 100)가 주어진다. 각 테스트 케이스는 한 줄로
  이루어져 있고, 정수 N은 짝수이고, 2 <= N <= 1,000,000을 만족한다.
*/

/* 출력

  각각의 테스트 케이스마다 골드바흐 파티션의 수를 출력한다.
*/

const fs = require("fs");

const [T, ...numbers] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const maxNum = Math.max(...numbers);
const primeArr = new Array(maxNum + 1).fill(true);
primeArr[0] = false;
primeArr[1] = false;

for (let i = 2; i <= maxNum; i++) {
  if (!isPrime(i)) primeArr[i] = false;
}

const answer = [];

for (let i = 0; i < T; i++) {
  let count = 0;
  const currentNumber = numbers[i];
  for (let j = 2; j <= currentNumber / 2; j++) {
    if (primeArr[j] && primeArr[currentNumber - j]) count++;
  }
  answer.push(count);
}

console.log(answer.join("\n"));
