let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => parseInt(e));
let N = input.shift();
console.log("input", input);

const arr = new Array(N);
arr.fill(0);

console.log("arr", arr);

for (let i = 0; i < N; i++) {
  arr[input[i]]++;
}

console.log("updated arr", arr);

for (let i = 0; i < N; i++) {
  if (arr[i]) {
    for (let j = 0; j < arr[i]; j++) {
      console.log(i);
    }
  }
}

// 노드로는 메모리 초과로 정답처리 안됨..
