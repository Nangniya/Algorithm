const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);

for (let i = 1; i < 2 * N; i++) {
  if (i < N) console.log(" ".repeat(N - i) + "*".repeat(2 * i - 1));
  else if (i === N) console.log("*".repeat(2 * N - 1));
  else console.log(" ".repeat(i - N) + "*".repeat(2 * N - 2 * (i - N) - 1));
}