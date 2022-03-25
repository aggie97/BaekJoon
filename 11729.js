const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);
let count = 0;
let answer = [];

const getHanoi = (num, first, second, thrid) => {
  if (num === 0) return;
  else {
    getHanoi(num - 1, first, thrid, second);
    answer.push([first, thrid]);
    count++;
    getHanoi(num - 1, second, first, thrid);
  }
};

getHanoi(N, "1", "2", "3");
console.log(count);
console.log(answer.map((e) => e.join(" ")).join("\n"));
