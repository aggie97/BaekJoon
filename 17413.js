let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const reg = /(<.*?>|\s)/g;

let tmp = input.split(reg);

let result = "";

tmp.map((word) => {
  if (reg.test(word)) {
    result += word;
  } else {
    let reverse = word.split("").reverse().join("");
    result += reverse;
  }
});

console.log(result);
