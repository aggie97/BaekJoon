/* 문제

  미국으로 유학간 동혁이는 세탁소를 운영하고 있다. 동혁이는 최근에 아르바이트로
  고등학생 리암을 채용했다. 동혁이는 리암에게 실망했다. 리암은 거스름돈을 주는 것을 자꾸 실수한다.
  심지어 $0.5달러를 줘야하는 경우에 거스름돈으로 $5달러는 주는 것이다!
  어쩔 수 없이 뛰어난 코딩 실력을 발휘해 리암을 도와주는 프로그램을 작성하려고 하지만,
  디아블로를 하느라 코딩할 시간이 없어서 이 문제를 읽고 있는 여러분이 대신 해주어야 한다.

  거스름돈의 액수가 주어지면 리암이 줘야할 쿠터(Quarter, $0.25)의 개수, 다임(Dime, $0.10)의 개수,
  니켈(Nickel, $0.05)의 개수, 페니(Penny, $0.01)의 개수를 구하는 프로그램을 작성하시오.
  거스름돈은 항상 $5.00 이하이고, 손님이 받는 동전의 개수를 최소로 하려고 한다.
  예를 들어, $1.24를 거슬러 주어야 한다면, 손님은 4쿼터, 2다임, 0니켈, 4페니를 받게 된다.
*/

/* 입력

  첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 거스름돈 C를 나타내는 정수 하나로
  이루어져 있다. C의 단위는 센트이다. (1달러 = 100t센트)(1 <= C <= 500)
*/

/* 출력

  각 테스트 케이스에 대해 필요한 쿼터의 개수, 다임의 개수, 니켈의 개수, 페니의 개수를 공백으로
  구분하여 출력한다.
*/

const fs = require("fs");

const [T, ...input] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const moneyUnit = {
  quarter: 0.25,
  dime: 0.1,
  nickel: 0.05,
  penny: 0.01,
};

const answer = input.map((num) => {
  num = num / 100;
  const { quarter, dime, nickel, penny } = moneyUnit;
  const quarterCnt = Math.floor(num / quarter);
  num = +(num % quarter).toFixed(2);
  const dimeCnt = Math.floor(num / dime);
  num = +(num % dime).toFixed(2);
  const nickelCnt = Math.floor(num / nickel);
  num = +(num % nickel).toFixed(2);
  const pennyCnt = Math.floor(num / penny);
  return `${quarterCnt} ${dimeCnt} ${nickelCnt} ${pennyCnt}`;
});

console.log(answer.join("\n").trim());
