/* 문제

  현재 가지고 있는 포켓몬 도감에서 포켓몬의 이름을 보면 포멧몬의 번호를 말하거나, 포멧몬의 번호를 보면
  포켓몬의 이름을 말하는 연습을 해라.
*/

/* 입력

  첫째 줄에는 도감에 수록되어 있는 포켓몬의 개수 N이랑 내가 맞춰야 하는 문제의 개수 M이 주어진다.
  N과 M은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수이다.
  둘째 줄부터 N개의 줄에 포켓몬의 번호가 1번인 포켓몬부터 N번에 해당하는 포켓몬까지 한 줄에 하나씩
  입력으로 들어온다. 포켓몬의 이름은 첫 글자와 마지막 글자가 대문자인 몇몇을 제외한 대부분이 첫 글자만 
  대문자인 영어이다. 포켓몬 이름의 길이는 최소 2, 최대 20글자이다.
  다음 줄부터 총 M개의 줄에 맞춰야하는 문제가 입력으로 들어온다.
  문제가 알파벳으로 들어오면 번호를 말해야 하고, 숫자로 들어오면 번호에 해당하는 문자를 출력해야 한다.
  입력으로 들어오는 숫자는 반드시 1보다 크거나 같고, N보다 작거나 같고, 도감에 있는 포켓몬의 이름만 주어진다.
*/

/* 출력

  첫째 줄부터 차례대로 M개의 줄에 각각의 문제에 대한 답을 출력하라.
*/

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

input.shift();

const encyclopediaMap = new Map();

for (let i = 0; i < N; i++) {
  encyclopediaMap.set(input[i], `${i + 1}`);
  encyclopediaMap.set(`${i + 1}`, input[i]);
}

const problem = input.slice(N);

for (let i = 0; i < M; i++) {
  console.log(encyclopediaMap.get(problem[i]));
}
