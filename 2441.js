const lineCount = Number(require("fs").readFileSync("dev/stdin").toString());
let answer = "*".repeat(lineCount);

for (let i = lineCount; i > 0; i--) {
  console.log(answer.substring(lineCount - i).padStart(lineCount, " "));
}
