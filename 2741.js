const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputData = fs.readFileSync(filePath).toString().split(' ');

let result = ''; 

function array(input) {
  for(let i = 1; i <= parseInt(input); i++){
    result += i + '\n';
  }
  return result;
}

console.log(array(inputData[0]));