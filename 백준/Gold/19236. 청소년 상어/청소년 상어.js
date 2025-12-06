const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

const BOARD = Array.from({ length: 4 }, () => []);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    BOARD[i].push([input[i][j * 2], input[i][j * 2 + 1] - 1]);
  }
}

const DIRECTIONS = [
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
];

let answer = BOARD[0][0][0];

BOARD[0][0] = [0, BOARD[0][0][1]];

function canMove(row, col) {
  return row >= 0 && row < 4 && col >= 0 && col < 4;
}

function createFishLocationMap(board) {
  const locations = Array(17).fill(null);
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] === null) continue;
      const fishNum = board[r][c][0];
      locations[fishNum] = [r, c];
    }
  }
  return locations;
}

function moveAllFish(board, fishLocationMap) {
  for (let fishNum = 1; fishNum <= 16; fishNum++) {
    const location = fishLocationMap[fishNum];
    if (location === null) continue;

    const [row, col] = location;

    let startDir = board[row][col][1];
    for (let i = 0; i < 8; i++) {
      const nextDir = (startDir + i) % 8;

      const [dr, dc] = DIRECTIONS[nextDir];
      const [nrow, ncol] = [row + dr, col + dc];

      if (!canMove(nrow, ncol, board)) continue;
      if (board[nrow][ncol] !== null && board[nrow][ncol][0] === 0) continue;

      board[row][col][1] = nextDir;
      [board[row][col], board[nrow][ncol]] = [
        board[nrow][ncol],
        board[row][col],
      ];
      fishLocationMap[fishNum] = [nrow, ncol];
      if (board[row][col] !== null)
        fishLocationMap[board[row][col][0]] = [row, col];
      break;
    }
  }
}

function backtrack(board, sum) {
  answer = Math.max(answer, sum);

  const fishLocationMap = createFishLocationMap(board);

  moveAllFish(board, fishLocationMap);

  const [sharkRow, sharkCol] = fishLocationMap[0];
  const sharkDir = board[sharkRow][sharkCol][1];
  const [dr, dc] = DIRECTIONS[sharkDir];
  for (let k = 1; k <= 3; k++) {
    const [nrow, ncol] = [sharkRow + dr * k, sharkCol + dc * k];
    if (!canMove(nrow, ncol)) continue;
    if (board[nrow][ncol] === null) continue;

    const fishToEat = board[nrow][ncol][0];
    if (fishToEat > 0) {
      const newBoard = board.map((row) =>
        row.map((cell) => (cell === null ? null : [...cell]))
      );
      const newSharkDir = newBoard[nrow][ncol][1];
      newBoard[nrow][ncol] = [0, newSharkDir];
      newBoard[sharkRow][sharkCol] = null;

      const newScore = sum + fishToEat;

      backtrack(newBoard, newScore);
    }
  }
}

backtrack(BOARD, answer);
console.log(answer);
