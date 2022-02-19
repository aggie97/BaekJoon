const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const C_words = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function result(input) {
  for (let alphabet of C_words) {
    input = input.split(alphabet).join("C");
  }
  return input.length;
}

console.log(result(input));

// 무조건 다시 풀어보기
