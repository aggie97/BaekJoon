/* 문제 - 요세푸스 문제 ()

  요세푸스 문제는 다음과 같다.
  1번부터 N번까지의 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(<=N)가 주어진다.
  이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을
  계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 떄까지 계속된다. 원에서 사람들이 제거되는 순서를
  (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7,3)-요세푸스 순열을 <3, 6, 2, 7, 5, 1, 4>이다.
*/

/* 입력

  첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. (1 <= K <= N <= 1,000)
*/

/* 출력

  예제와 같이 요세푸스 순열을 출력한다.
*/

const fs = require("fs");

const [N, K] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      if (!this.tail) {
        this.head.next = newNode;
        newNode.prev = this.head;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  pop() {
    const popped = this.head;
    this.head = this.head.next;
    this.length--;
    return popped.val;
  }

  getLength() {
    return this.length;
  }
}

const linkedList = new LinkedList();
const answer = [];

for (let i = 1; i <= N; i++) {
  linkedList.push(i);
}

while (linkedList.getLength() > 0) {
  for (let i = 1; i < K; i++) {
    linkedList.push(linkedList.pop());
  }
  answer.push(linkedList.pop());
}

console.log(`<${answer.join(", ")}>`);
