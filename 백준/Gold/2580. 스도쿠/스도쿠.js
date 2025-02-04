const board = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.trim().split(" ").map(Number));

const isValid = (num, row, col) => {
  const inRow = board[row].includes(num);
  const inCol = board.some((row) => row[col] === num);
  const inBox = (num, row, col) => {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) return true;
      }
    }
    return false;
  };

  return !(inRow || inCol || inBox(num, row, col));
};

const findEmptyPos = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return null;
};

const backtrack = () => {
  const emptyPos = findEmptyPos();
  if (!emptyPos) return true;

  const [row, col] = emptyPos;

  for (let num = 1; num <= 9; num++) {
    if (isValid(num, row, col)) {
      board[row][col] = num;
      if (backtrack()) return true;
      board[row][col] = 0;
    }
  }

  return false;
};

backtrack();
console.log(board.map((arr) => arr.join(" ")).join("\n"));
