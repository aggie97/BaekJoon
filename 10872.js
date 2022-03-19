const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

let result = input;

const recursive = (num) => {
  if (num > 1) {
    result *= num - 1;
    return recursive(num - 1);
  } else return result;
};

console.log(recursive(input));
