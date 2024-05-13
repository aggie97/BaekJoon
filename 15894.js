/* 문제

  "한 변의 길이가 1인 정사각형을 아래 그림과 같이 겹치지 않게 빈틈없이 계속 붙여 나간다. 
  가장 아랫부분의 정사각형이 n개가 되었을 때, 실선으로 이루어진 도형의 둘레의 길이를 구하시오."
  가장 아랫부분의 정사각형 개수가 주어지면 그에 해당하는 답을 출력하는 프로그램을 만들어보자.
*/

/* 입력

  첫 번째 줄에 가장 아랫부분의 정사각형 개수 n이 주어진다. (1 <= n <= 10^9)
*/

/* 출력

  첫 번째 줄에 형석이가 말해야 하는 답을 출력한다.
*/

const fs = require("fs");

const input = +fs.readFileSync("dev/stdin").toString().trim();

/*

4 8 12 

N이 주어진다면,

우선, 가장 아래 밑변의 길이 N
가장 윗변의 길이 +1
맞닿은 변의 양쪽 변 길이는 0.5씩 높이-1만큼 +1인데 이때 높이는 N과 같으므로 +(N-1)
옆변 또한 높이 * 2 이므로 +N*2
*/

function getPerimeter(n) {
  const top = 1;
  const side = n * 2;
  const intersection = n - 1;
  const bottom = n;
  return top + side + intersection + bottom;
}

console.log(getPerimeter(input));
