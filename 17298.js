let [N, ...nums] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

nums = nums[0].split(" ").map((v) => +v);
let stack = [];
let answer = new Array(parseInt(N)).fill(-1);

for (let i = 0; i < +N; i++) {
  while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
    answer[stack.pop()] = nums[i];
  }
  stack.push(i);
}

console.log(answer.join(" ").trim());

/*
  주어진 입력의 길이 만큼 answer 배열에 -1을 채워놓는다.
  입력의 길이 만큼 for문을 돌면서 stack에 인덱스(i)를 넣는다.
  스택에 0 이 들어가면 while문의 첫 번째 조건 stack.length 가 참이 되고,
  두 번째 조건 stack의 마지막 요소를 인덱스로 사용하여 nums의 요소에 접근한다.
  가장 첫 번째는 nums[0] < nums[1]이 된다. 이 조건까지 만족되면,
  stack의 마지막 요소를 인덱스로 사용한 answer 요소에 nums[i]를 대입한다.

  그 후 while문을 나와서 stack에 다음 인덱스(i)를 넣는다.
*/
