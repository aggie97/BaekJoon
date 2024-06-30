/* 문제 - 큐 2

  정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
  명령은 총 여섯 가지이다.
  - push X : 정수 X를 큐에 넣는 연산이다.
  - pop : 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는
          경우에는 -1을 출력한다.
  - size : 큐에 들어있는 정수의 개수를 출력한다.
  - empty : 큐가 비어있으면 1, 아니면 0을 출력한다.
  - front : 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을
            출력한다.
  - back : 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을
           출력한다.
*/

/* 입력

  첫째 줄에 주어지는 명령의 수 N (1 <= N <= 2,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는
  명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다.
  문제에 나와있지 않은 명령이 주어지는 경우는 없다.
*/

/* 출력

  출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.
*/

const fs = require("fs");

const [N, ...input] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.state = {};
    this.head = 0;
    this.tail = 0;
  }

  push(num) {
    this.tail++;
    this.state[this.tail] = num;
  }

  pop() {
    if (this.tail - this.head === 0) {
      return -1;
    }
    const temp = this.state[this.head + 1];
    delete this.state[this.head];
    this.head++;

    return temp;
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return (this.head === 0 && this.tail === 0) || this.head === this.tail
      ? 1
      : 0;
  }

  front() {
    if (this.tail - this.head === 0) {
      return -1;
    }
    return this.state[this.head + 1];
  }

  back() {
    if (this.tail - this.head === 0) {
      return -1;
    }
    return this.state[this.tail];
  }
}

const myQueue = new Queue();
const answer = [];
for (let i = 0; i < N; i++) {
  const [cmd, num] = input[i].split(" ");

  if (num) myQueue[cmd](+num);
  else answer.push(myQueue[cmd]());
}

console.log(answer.join("\n"));
