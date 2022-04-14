/*
let [str, commandCnt, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const strArr = str.split("");
strArr.push("END");

let cursorPos = strArr.length - 1;

for (let i = 0; i < commandCnt; i++) {
  const cmd = commands[i][0];

  switch (cmd) {
    case "L":
      if (cursorPos !== 0) cursorPos--;
      break;
    case "D":
      if (cursorPos !== strArr.length - 1) cursorPos++;
      break;
    case "B":
      if (cursorPos > 0) {
        cursorPos--;
        strArr.splice(cursorPos, 1);
      }
      break;
    case "P":
      const spell = commands[i][2];
      strArr.splice(cursorPos, 0, spell);
      cursorPos++;
      break;
  }
}

strArr.splice(strArr.indexOf("END"), 1);
console.log(strArr.join(""));
*/

//첫 트 시간초과 forEach가 원인인 줄 알고 for문으로 고쳤지만 실패
//splice의 시간 복잡도는 O(N).. 시간 복잡도가 O(1)인 것으로 교체해야함

let [str, commandCnt, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const strArr = str.split("");
const saveBox = [];

for (let i = 0; i < commandCnt; i++) {
  const cmd = commands[i][0];

  switch (cmd) {
    case "L":
      if (strArr.length) saveBox.push(strArr.pop());
      break;
    case "D":
      if (saveBox.length) strArr.push(saveBox.pop());
      break;
    case "B":
      strArr.pop();
      break;
    case "P":
      const spell = commands[i][2];
      strArr.push(spell);
      break;
  }
}

console.log(strArr.concat(saveBox.reverse()).join(""));
