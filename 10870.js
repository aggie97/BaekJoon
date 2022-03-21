const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

let fibonacci = [0, 1];

for (let i = 0; i < input; i++) {
  let curr = fibonacci[0] + fibonacci[1];
  fibonacci.push(curr);
  fibonacci.shift();
}

console.log(fibonacci[0]);
