const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const multipled = input[0] * input[1] * input[2];

const numbers = multipled.toString().split('').sort();

let emptyArray = [0,0,0,0,0,0,0,0,0,0];

const countedResult = numbers.reduce(function (allNums, num) {
  if(num in allNums){
    allNums[num]++;
  }else{
    allNums[num] = 1;
  }
  return allNums;
},emptyArray);

for(let i of countedResult){
    console.log(i);
}

// ------------------------------------------------------------------------------

// const nums = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// const result = String(nums[0] * nums[1] * nums[2]); 


// for(let i=0; i<=9; i++){
//   console.log(result.split(i).length-1);
// }