const [A, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

function getGcm(a, b) {
  return b ? getGcm(b, a % b) : a;
}

let gcm = getGcm(A, B);
let lcm = (A * B) / gcm;

console.log(gcm + "\n" + lcm);
