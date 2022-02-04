const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const subjectNum = input[0];

let scores = [];

for(let i = 0; i<subjectNum; i++){
  scores[i] = parseInt(input[1].split(' ')[i]);
}

const highestScore = Math.max(...scores);

const newScores = scores.map((score) => (score / highestScore) * 100);

let sum = 0;

for(let i = 0; i<subjectNum; i++){
  sum += newScores[i];
}

console.log(sum / subjectNum);