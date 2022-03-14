const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [Ax, Ay] = input[0].split(" ");
const [Bx, By] = input[1].split(" ");
const [Cx, Cy] = input[2].split(" ");

let [Dx, Dy] = [0, 0];

if (Ax === Bx) Dx = Cx;
else if (Ax === Cx) Dx = Bx;
else Dx = Ax;

if (Ay === By) Dy = Cy;
else if (Ay === Cy) Dy = By;
else Dy = Ay;

console.log(Dx, Dy);
