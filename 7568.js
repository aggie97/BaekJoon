const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

const people = [];
const ranking = [];

for (let i = 0; i < N; i++) {
  people.push(input[i].split(" ").map((n) => parseInt(n)));
}

for (let i = 0; i < N; i++) {
  let counter = 0;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
        counter++;
      }
    }
  }
  ranking.push(counter + 1);
}

console.log(ranking.join(" "));
