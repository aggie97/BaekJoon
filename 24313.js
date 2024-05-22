/* 문제

  알고리즘의 소요 시간을 나타내는 O-표기법(빅-오)을 다음과 같이 정의할 떄
  O(g(n)) = {f(n) | 모든 n >= n0에 대하여 f(n) <= c x g(n)인 양의 상수 c와 n0가 존재한다.}
  이 정의는 실제 O-표기법(https://en.wikipedia.org/wiki/Big_O_notatino)과 다를 수 있다.
  함수 f(n) = a1n + a0 양의 정수 c, n0가 주어질 경우 O(n) 정의를 만족하는지 알아보자.
*/

/* 입력

  첫째 줄에 함수 f(n)을 나타내는 정수 a1, a0가 주어진다. (0 <= |ai| <= 100)
  다음 줄에 양의 정수 c가 주어진다. (1 <= c <= 100)
  다음 줄에 양의 정수 n0가 주어진다. (1 <= n0 <= 100)
*/

/* 출력

  f(n), c, n0가 O(n) 정의를 만족하면 1, 아니면 0을 출력한다.
*/

// n0가 양수이고 모든 n >= n0 이므로 n은 무조건 양수
// a1과 a0의 절대값이 0~100 이므로 a1과 a0의 범위는 -100 ~ 100 까지이다.

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [a0, a1] = input[0].split(" ").map(Number);
const c = +input[1];
const n0 = +input[2];

console.log(a0 * n0 + a1 <= c * n0 && a0 <= c ? 1 : 0);
