const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const getPrimeNumCount = (num) => {
  let arr = [];
  let start = num;
  let end = num * 2;

  for (let i = 0; i <= end; i++) arr.push(i);

  for (let i = 2; i * i <= end; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= end; j += i) {
        arr[j] = false;
      }
    }
  }

  if (start < 2) arr.splice(0, 2, false);
  else arr.splice(0, start, false);

  const result = arr.filter((v) => v !== false).length;
  return result;
};

for (const num of input) {
  if (num === 0) break;
  console.log(getPrimeNumCount(num));
}
