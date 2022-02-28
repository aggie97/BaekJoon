const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);

let odd = 0;

for (let i = 0; i < testCase; i++) {
  odd = 2 * i + 1;
  const [floor, roomNum] = [Number(input[odd]), Number(input[odd + 1])];
  const personnel = [];
  for (let j = 0; j <= floor; j++) {
    personnel.push([1]);
    for (let k = 1; k < roomNum; k++) {
      if (j === 0) personnel[j].push(k + 1);
      else personnel[j].push(personnel[j][k - 1] + personnel[j - 1][k]);
    }
  }
  console.log(personnel[floor][roomNum - 1]);
}
