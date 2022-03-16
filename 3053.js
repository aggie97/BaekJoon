const input = +require("fs").readFileSync("/dev/stdin").toString();

const radius = input;

const uclid = Math.PI * radius ** 2;

const taxi = (radius * 2) ** 2 / 2;

console.log(uclid.toFixed(6) + "\n" + taxi.toFixed(6));
