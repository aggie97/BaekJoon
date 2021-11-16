const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const LeapYear = parseInt(inputData[0]);

if((LeapYear % 4 === 0 && LeapYear % 100 !== 0) || LeapYear % 400 === 0){
  console.log(1);
}else{
  console.log(0);
};