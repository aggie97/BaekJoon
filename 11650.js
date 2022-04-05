const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const XYArr = [];

for (let i = 0; i < N; i++) {
  let [x, y] = input[i].split(" ").map((str) => parseInt(str));
  XYArr.push([x, y]);
}

XYArr.sort((a, b) => {
  if (a[0] === b[0]) {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
  } else if (a[0] < b[0]) return -1;
});

console.log(XYArr.map((arr) => arr.join(" ")).join("\n"));
