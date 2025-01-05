const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);

for (let i = 0; i < N*2-1; i++) {
    const spaces = Math.abs(N - i - 1);
    const stars = 2 * (N - spaces) - 1;
    console.log(" ".repeat(spaces) + "*".repeat(stars));
}