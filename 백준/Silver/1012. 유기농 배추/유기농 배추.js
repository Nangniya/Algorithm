const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const TestN = Number(input[0]);
const TestArr = Array.from(new Array(TestN), () => []);
let testIndex = 0;
for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(" ").map(Number);
  if (arr.length === 3) {
    TestArr[testIndex] = input.slice(i, i + arr[2] + 1);
    testIndex++;
  }
}

for (let testCase of TestArr) {
  const [ROW, COL, N] = testCase[0].toString().split(" ").map(Number);
  const field = Array.from(Array(COL), () => Array(ROW).fill(0));
  for (let j = 1; j <= N; j++) {
    const [X, Y] = testCase[j].split(" ").map(Number);
    field[Y][X] = 1;
  }

  let count = 0;

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        dfs(j, i, field);
        count++;
      }
    }
  }
  console.log(count);
}

function dfs(x, y, field) {
  if (
    x < 0 ||
    x >= field[0].length ||
    y < 0 ||
    y >= field.length ||
    field[y][x] === 0
  ) {
    return;
  }

  field[y][x] = 0; // 방문 처리

  // 상하좌우 탐색
  dfs(x - 1, y, field);
  dfs(x + 1, y, field);
  dfs(x, y - 1, field);
  dfs(x, y + 1, field);
}