const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);

const patternArray = [];

const printStars = (num) => {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      getStar(i, j, num);
    }
    patternArray.push("\n");
  }
  return patternArray;
};

const getStar = (i, j, num) => {
  if (i % 3 === 1 && j % 3 === 1) {
    patternArray.push(" ");
  } else {
    if (num === 1) patternArray.push("*");
    else getStar(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
  }
};

console.log(printStars(N).join(""));
