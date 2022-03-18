const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = parseInt(input.shift());

for (let i = 0; i < testCase; i++) {
  const position = input[i].split(" ").map((n) => parseInt(n));
  const [x1, y1] = position.splice(0, 2);
  const [x2, y2] = position.splice(1, 2);
  let r2 = position.pop();
  let r1 = position.pop();

  const dx = x1 - x2;
  const dy = y1 - y2;

  if (r1 > r2) {
    const temp = r1;
    r1 = r2;
    r2 = temp;
  }

  const rSum = (r1 + r2) * (r1 + r2);
  const rSub = (r2 - r1) * (r2 - r1);
  const d = dx * dx + dy * dy;

  if (d < rSum && d > rSub) {
    console.log(2);
  } else if (d === rSum || (d === rSub && d !== 0)) {
    console.log(1);
  } else if (d < rSub || d > rSum) {
    console.log(0);
  } else if (d === 0) {
    if (r1 === r2) {
      console.log(-1);
    } else {
      console.log(0);
    }
  }
}

// 원...
