/* 문제 - 스택 2

  정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
  명령은 총 다섯 가지이다.
  1. 1 X : 정수 X를 스택에 넣는다. (1 <= X <= 100,000)
  2. 2   : 스택에 정수가 있다면 맨 위의 정수르 빼고 출력한다. 없다면 -1을 대신 출력한다.
  3. 3   : 스택에 들어있는 정수의 개수를 출력한다.
  4. 4   : 스택이 비어있으면 1, 아니면 0을 출력한다.
  5. 5   : 스택에 정수가 있다면 맨 위의 정수를 출력한다.
*/

/* 입력

  첫쨰 줄에 명령의 수 N이 주어진다. (1 <= N <= 1,000,000)
  둘째 줄부터 N개 줄에 명령이 하나씩 주어진다.
  출력을 요구하는 명령은 하나 이상 주어진다.
*/

/* 출력

  출력을 요구하는 명령이 주어질 때마다 명령의 결과를 한 줄에 하나씩 출력한다.
*/

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => (el.includes(" ") ? el.split(" ").map(Number) : +el));
input.shift();

class Stack {
  constructor() {
    this.state = [];
    this.result = [];
  }
  1(X) {
    this.state.push(X);
  }

  2() {
    const poppedInt = this.state.pop();
    this.result.push(poppedInt ?? -1);
  }

  3() {
    this.result.push(this.state.length);
  }

  4() {
    this.result.push(this.state.length === 0 ? 1 : 0);
  }

  5() {
    this.result.push(this.state.at(-1) ?? -1);
  }
  show() {
    console.log(this.result.join("\n"));
  }
}

const myStack = new Stack();

for (let i = 0; i < input.length; i++) {
  if (typeof input[i] === "number") myStack[input[i]]();
  else myStack[input[i][0]](input[i][1]);
}

myStack.show();
