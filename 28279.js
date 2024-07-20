/* 문제 - 덱2

  정수를 저장하는 덱을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
  명령은 총 여덟 가지이다.
  
  1. 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
  2. 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
  3. 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
  4. 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
  5. 5: 덱에 들어있는 정수의 개수를 출력한다.
  6. 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
  7. 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
  8. 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.
*/

/* 입력

  첫째 줄에 명령의 수 N이 주어진다. (1 ≤ N ≤ 1,000,000)

  둘째 줄부터 N개 줄에 명령이 하나씩 주어진다.

  출력을 요구하는 명령은 하나 이상 주어진다.

*/

/* 출력

  출력을 요구하는 명령이 주어질 때마다 명령의 결과를 한 줄에 하나씩 출력한다.
*/

const [N, ...commands] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((val) =>
    val.includes(" ") ? val.split(" ").map(Number) : [Number(val)]
  );

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.front = null;
    this.rear = null;
  }

  shift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }

    this.length++;
  }

  unshift() {
    const shifted = this.front;

    if (this.length === 0) return -1;

    this.front = this.front.next;
    if (this.front) {
      this.front.prev = null;
    } else {
      this.rear = null;
    }
    this.length--;

    return shifted.val;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      newNode.prev = this.rear;
      this.rear = newNode;
    }

    this.length++;
  }

  pop() {
    const popped = this.rear;

    if (this.length === 0) return -1;

    this.rear = this.rear.prev;

    if (this.rear) {
      this.rear.next = null;
    } else {
      this.front = null;
    }

    this.length--;

    return popped.val;
  }

  getLength() {
    return this.length;
  }

  isEmpty() {
    return this.length > 0 ? 0 : 1;
  }

  showFront() {
    if (!this.front) return -1;
    return this.front.val;
  }

  showRear() {
    if (!this.rear) return -1;
    return this.rear.val;
  }
}

const deque = new LinkedList();
const answer = [];

for (let i = 0; i < N; i++) {
  const [command, input] = commands[i];

  switch (command) {
    case 1:
      deque.shift(input);
      break;
    case 2:
      deque.push(input);
      break;
    case 3:
      answer.push(deque.unshift());
      break;
    case 4:
      answer.push(deque.pop());
      break;
    case 5:
      answer.push(deque.getLength());
      break;
    case 6:
      answer.push(deque.isEmpty());
      break;
    case 7:
      answer.push(deque.showFront());
      break;
    case 8:
      answer.push(deque.showRear());
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
