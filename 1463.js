const input = +require("fs").readFileSync("./dev/stdin").toString();

const arr = [0];

function calculateWithoutMemo(n) {
  if (!arr[n]) {
    if (n % 3 === 0) arr[n] = calculateWithoutMemo(n % 3);
    else if (n % 2 === 0) arr[n] = calculateWithoutMemo(n % 2);
    else arr[n] = calculateWithoutMemo(n - 1);
  }
  return arr[n];
}

console.log(calculateWithoutMemo(input));
