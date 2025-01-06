const input = require("fs").readFileSync(0).toString().trim();

const [str, b] = input.split(" ");
const answer = parseInt(str, Number(b));

console.log(answer);
