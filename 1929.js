let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((n) => n * 1);

const getPrimeNum = (start, end) => {
  let arr = [];

  for (let i = 0; i <= end; i++) {
    arr.push(i);
  }

  for (let i = 2; i * i <= end; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= end; j += i) {
        arr[j] = false;
      }
    }
  }

  if (start < 2) {
    arr.splice(0, 2, false);
  } else arr.splice(0, start, false);

  const result = arr.filter((value) => value !== false);

  return result;
};

console.log(getPrimeNum(input[0], input[1]).join("\n"));
