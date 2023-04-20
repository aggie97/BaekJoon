const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = inputData[0].split(" ").map(Number);
const answer = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const temp = inputData[i];
  [answer[+temp[0] - 1], answer[+temp[2] - 1]] = [
    answer[+temp[2] - 1],
    answer[+temp[0] - 1],
  ];
}

console.log(answer.join(" "));

// 1 ~ N 까지의 번호가 매겨져 있는 공이 1 ~ N 까지의 번호를 가진 바구니에 담겨 있다.
// 이를 Array.from을 사용해 길이를 N으로 지정해주고 mapFunction의 인덱스 + 1을 할당해서 만들어줬다.

// 그 후엔 M번 만큼 for문을 돌려 answer 배열의 번호를 구조 분해 할당으로 바꿔줬다.
// 다른 편집기로 에제와 같은 입력을 넣어주고 돌려보면 정상적으로 답이 나오는 걸 확인할 수 있었지만 오답이다.

// 왜 틀렸을까...

for (let i = 1; i <= M; i++) {
  const temp = inputData[i].split(" ").map(Number);
  [answer[temp[0] - 1], answer[temp[1] - 1]] = [
    answer[temp[1] - 1],
    answer[temp[0] - 1],
  ];
}

console.log(answer.join(" "));

// 뭐지?? +연산자로 문자열에서 숫자로 타입 변환하지 않고 미리 타입 변환 후에 접근하니까 또 정답이란다..
