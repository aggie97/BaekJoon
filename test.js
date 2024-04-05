console.log("콘솔에 찍혀라!");

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString();

console.log(input);
