const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);

const WIDTH = Array(N).fill(false);
const DIAGONAL_RIGHT = Array(2 * N).fill(false);
const DIAGONAL_LEFT = Array(2 * N).fill(false);

const backtrack = (y) => {
  let answer = 0;

  if (y === N) {
    answer++;
  } else {
    for (let i = 0; i < N; i++) {
      if (WIDTH[i] || DIAGONAL_RIGHT[i + y] || DIAGONAL_LEFT[N - i + y])
        continue;

      WIDTH[i] = DIAGONAL_RIGHT[i + y] = DIAGONAL_LEFT[N - i + y] = true;
      answer += backtrack(y + 1);
      WIDTH[i] = DIAGONAL_RIGHT[i + y] = DIAGONAL_LEFT[N - i + y] = false;
    }
  }

  return answer;
};

console.log(backtrack(0));
