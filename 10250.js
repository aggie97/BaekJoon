const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let [floor, nthFloorRooms, nthGuest] = input[i].split(" ");

  let floorCount = 0;
  let roomCount = 1;
  let count = 0;
  while (count < Number(nthGuest)) {
    count++;
    if (floorCount < floor) {
      floorCount++;
    } else {
      floorCount = 1;
      roomCount++;
    }
  }
  roomCount =
    roomCount.toString().length === 1 ? "0" + roomCount.toString() : roomCount;
  console.log(`${floorCount}${roomCount}`);
}
