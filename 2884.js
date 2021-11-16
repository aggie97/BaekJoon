const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

let hour = parseInt(inputData[0]);
let min = parseInt(inputData[1]);

if(min < 45){
  min = 60 - (-(min - 45));
  if(hour == 0){
    hour = 23;
  }else{
    hour = hour - 1;
  }
}else{
  min -= 45;
}

console.log(hour, min);
