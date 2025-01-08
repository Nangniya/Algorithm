const input = require("fs").readFileSync(0).toString().trim();
const N = (Math.pow(Number(input), 2) - Number(input)) / 2;

console.log(N + "\n" + 2);