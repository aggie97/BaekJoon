const input = require("fs").readFileSync("/dev/stdin").toString();

const constructorArray = [];

const getSum = (num) => {
  let nums = num.toString().split("");
  return num + nums.reduce((acc, value) => (acc += parseInt(value)), 0);
};

for (let i = 1; i < +input; i++) {
  if (getSum(i) === +input) {
    constructorArray.push(i);
  }
}

constructorArray.length
  ? console.log(Math.min(...constructorArray))
  : console.log(0);
