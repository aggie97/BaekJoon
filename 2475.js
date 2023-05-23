console.log(
  require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .split(" ")
    .map(Number) // 받아온 string[]을 number[]로 변환
    .reduce((acc, curr) => acc + curr * curr, 0) % 10 // 각 숫자들을 제곱하고 더한 후에 10으로 나눈 나머지를 출력
);
