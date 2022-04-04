let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

const N = input.shift();

const getAvg = (numsArr) => {
  const totalSum = numsArr.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return Number((totalSum / numsArr.length).toFixed(0));
};

const getMedian = (numsArr) => {
  const sortedArr = numsArr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length / 2 - 0.5];
};

const getMode = (numsArr) => {
  const selectivity = {};
  let result = 0;
  for (let num of numsArr) {
    if (selectivity[num]) selectivity[num]++;
    else selectivity[num] = 1;
  }

  const max = Math.max(...Object.values(selectivity));
  let maxArr = [];

  for (let numKey in selectivity) {
    if (selectivity[numKey] === max) maxArr.push(parseInt(numKey));
  }

  if (maxArr.length > 1) {
    maxArr = maxArr.sort((a, b) => a - b);
    result = maxArr[1];
  } else {
    result = maxArr[0];
  }

  return result;
};

const getRange = (numsArr) => {
  const result =
    numsArr.length < 2 ? 0 : Math.max(...numsArr) - Math.min(...numsArr);
  return result;
};

console.log(String(getAvg(input)));
console.log(getMedian(input));
console.log(getMode(input));
console.log(getRange(input));
