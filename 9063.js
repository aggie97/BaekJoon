/* 문제 

  임씨의 이름이 새겨진 옥구슬이 나오는 모든 지점을 포함하는 가장 작은 남북, 동서 방향으로 평행한 변을 
  갖는 직사각형의 대지를 임씨의 소유로 인정한다.
  임씨의 이름이 새겨진 옥구슬의 위치 N 개가 주어질 때에, 임씨에게 돌아갈 대지의 넓이를 계산하는 프로그램을 작성하시오. 
  단, 옥구슬의 위치는 2 차원 정수 좌표로 주어지고 옥구슬은 같은 위치에 여러 개가 발견될 수도 있으며, x 축의 양의방향을 동쪽, y 축의 양의방향을 북쪽이라고 가정한다. 
*/

/* 입력

  첫째 줄에는 점의 개수 N (1 ≤ N ≤ 100,000) 이 주어진다. 이어지는 N 줄에는 각 점의 좌표가 두 개의 정수로 한 줄에 하나씩 주어진다.
  각각의 좌표는 -10,000 이상 10,000 이하의 정수이다.
*/

/* 출력

  첫째 줄에 N개의 점을 둘러싸는 최소 크기의 직사각형의 넓이를 출력하시오.
*/

const fs = require("fs");

const [N, ...input] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

/*
  가장 큰 x, y 또는 가장 작은 x, y 좌표를 찾아서 해당 좌표들을 포함하는 범위

  가장 큰 x =>   우변
  가장 작은 x => 좌변
  가장 큰 y =>   윗변
  가장 작은 y => 밑변

  가장 큰 x - 가장 작은 x = 너비
  가장 큰 y - 가장 작은 y = 높이
*/
const coordinates = input.map((nums) => nums.split(" ").map(Number));
const [initX, initY] = coordinates[0];
let [x1, y1, x2, y2] = [initX, initY, initX, initY];

for (let i = 1; i < +N; i++) {
  const [x, y] = coordinates[i];
  if (x > x2) x2 = x;
  if (x < x1) x1 = x;
  if (y > y2) y2 = y;
  if (y < y1) y1 = y;
}

const width = x2 - x1;
const height = y2 - y1;

console.log(width * height);
