
function d(n){
  let start = n;
  let result = 0;

  let numArray = start.toString().split('');
  for(let i = 0; i < numArray.length; i++){
    result += Number(numArray[i]);
  }
  return start + result;
}

const range = 10000;

let selfNumbers = Array(range + 1).fill(true);

for(let i = 0; i <= range; i++){
  selfNumbers[d(i)] = false;
}

for(let i = 0; i < range; i++){
  if (selfNumbers[i]) console.log(i);
}

// 무조건 다시 풀어보자...!