const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);

console.log(Math.pow(2 ** N + 1, 2));