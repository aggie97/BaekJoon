const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const grade = parseInt(inputData[0]);

if(grade >= 90){
  console.log("A");
}else if(grade >= 80){
  console.log("B");
}else if(grade >= 70){
  console.log("C");
}else if(grade >= 60){
  console.log("D");
}else{
  console.log("F");
}