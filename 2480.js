const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .sort();

const dice1 = parseInt(input[0]);
const dice2 = parseInt(input[1]);
const dice3 = parseInt(input[2]);

console.log(dice1, dice2, dice3);

if (dice1 != dice2 && dice2 != dice3) {
  console.log(dice3 * 100);
} else if (
  (dice1 != dice3 && dice1 == dice2) ||
  (dice1 != dice2 && dice2 == dice3)
) {
  console.log(1000 + dice2 * 100);
} else {
  console.log(10000 + dice1 * 1000);
}
