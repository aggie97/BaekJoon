/* 문제

  단어 S 와 정수 i 가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.
*/

/* 입력
  
  첫째 줄에 영어 소문자와 대문자로만 이루어진 단어 S 주어진다. 단어의 길이는 최대 1000.
  둘째 줄에 정수 i가 주어진다. (1 <= i <= |S|)
*/

/* 
  String.indexOf()를 쓰면 될 듯하다. 단 0번째 라는 건 없으므로 마지막에 +1 해주면 될 듯?
*/

// 1트

/*
const fs = require("fs");

const [inputWord, inputInteger] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const answer = inputWord.indexOf(inputInteger) + 1;

console.log(answer);
*/

/* 
  보기 좋게 틀림. i가 1, 2, 3, ... , S의 길이 이런 식으로 주어지므로
  마지막에 +1 이 아닌 -1 을 해줘야 할 듯
*/

// 2트

// const fs = require("fs");

// const [inputWord, inputInteger] = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n");

// const answer = inputWord.indexOf(inputInteger) - 1;

// console.log(answer);

/*
  또 틀렸다. 채점되다 틀린 것도 아니고 그냥 제출 즉시 틀림.
  로컬에서 돌려보면서 풀어봐야겠다.
  로컬에서 오랜만에 돌리려다 문득 말도 안되는 식을 작성한 게 보였다.
  문자를 반환해야하는데 string + 1, string - 1 이러고 있으니까 답이 틀리지 ㅋㅋㅋ
  문제를 잘 읽자. 차근차근 풀자.. 쉬운 문제인데 ㅠㅠ
*/

// 3트

// const fs = require("fs");

// const [inputWord, inputInteger] = fs
//   .readFileSync("dev/stdin")
//   .toString()
//   .split("\n");

// const answer = inputWord.indexOf(inputInteger - 1);

// console.log(answer);

/* 
  또또 틀렸다 ㅋㅋ 이제 진짜 로컬에서 돌려보자...
  왜 콘솔에 아무것도 안 찍히지...? 아.. dev 앞에 슬래쉬...
  와 근데 생각해보니까 indexOf는 해당 글자의 인덱스를 반환하는 메서드잖아...
  진짜 .. 내 머리 이거 어떡하지?
*/

// 4트

const fs = require("fs");

const [inputWord, inputInteger] = fs
  .readFileSync("dev/stdin")
  .toString()
  .split("\n");

const answer = inputWord[inputInteger - 1];

console.log(answer);
