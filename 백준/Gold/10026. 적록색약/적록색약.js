const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const normal = input.slice(1).map((s) => s.trim().split(""));
const rgError = Array(N);

for (let i = 0; i < N; i++) {
  rgError[i] = normal[i].map((color) => (color === "G" ? "R" : color));
}

const visitedNormal = Array.from({ length: N }, () => Array(N).fill(false));
const visitedRgError = Array.from({ length: N }, () => Array(N).fill(false));

const directionRow = [-1, 0, 1, 0]; // 상 우 하 좌
const directionCol = [0, 1, 0, -1]; // 상 우 하 좌

let normalAnswer = 0;
let rgErrorAnswer = 0;

function dfs(row, col, color, image, visited) {
  visited[row][col] = true;
  for (let i = 0; i < 4; i++) {
    const newRow = row + directionRow[i];
    const newCol = col + directionCol[i];
    if (newRow >= N || newRow < 0 || newCol >= N || newCol < 0) continue;
    if (!visited[newRow][newCol] && color === image[newRow][newCol]) {
      dfs(newRow, newCol, color, image, visited);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visitedNormal[i][j]) {
      normalAnswer++;
      dfs(i, j, normal[i][j], normal, visitedNormal);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visitedRgError[i][j]) {
      rgErrorAnswer++;
      dfs(i, j, rgError[i][j], rgError, visitedRgError);
    }
  }
}

console.log(normalAnswer + " " + rgErrorAnswer);
