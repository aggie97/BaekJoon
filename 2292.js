const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const roomNum = Number(input[0]);

let step = 1;
let nthFloorRooms = 0;
let prevRooms = 1;
let totalRooms = 0;

while (roomNum > prevRooms) {
  step++;
  prevRooms += 6 * (step - 1);
  totalRooms = prevRooms + 6 * step;

  nthFloorRooms = totalRooms - prevRooms;
  console.log(prevRooms, totalRooms, step, nthFloorRooms);
}

console.log(step === 1 ? 1 : step);
