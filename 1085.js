const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((n) => parseInt(n));

let [x, y, w, h] = input;

let arr = [x, y, w - x, h - y];

console.log(Math.min(...arr));

// 내 풀이..ㅎㅎ
// if (x > scaleX) console.log(scaleX);
// else if (y > scaleY) console.log(scaleY);
// else if (x < scaleX) console.log(x);
// else if (y < scaleY) console.log(y);
