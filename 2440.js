const N = +require("fs").readFileSync("/dev/stdin").toString();
let answer = "";
for (let i = 0; i < N; i++) {
  for (let j = N - i; j >= 1; j--) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer);

// for (let i = N; i >= 1; i--) {
//   console.log("*".repeat(i));
// }
