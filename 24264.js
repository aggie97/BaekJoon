/* 문제

  입력의 크기 n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력해보자.
  MenOfPassion 알고리즘은 다음과 같다.
  MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n
      for j <- 1 to n
        sum <- sum + A[i] * A[j]; # 코드1
    return sum;
  }
*/

/* 입력

  첫째 줄에 입력의 크기 n(1<= n <= 500,000)이 주어진다.
*/

/* 출력

  첫째 줄에 코드1의 수행 횟수를 출력한다.
  둘째 줄에 코드1의 수행 횟수를 다항식으로 나타내었을 때, 최고차항의 차수를 출력한다.
  단, 다항식으로 나타낼 수 없거나 최고차항의 차수가 3보다 크면 4를 출력한다.
*/

// 1부터 입력값 n까지 반복하는 for문 2개 => n^2 => 수행 횟수는 n의 제곱, 최고차항은 2

const fs = require("fs");

const input = +fs.readFileSync("dev/stdin").toString().trim();

console.log(input ** 2 + "\n2");
