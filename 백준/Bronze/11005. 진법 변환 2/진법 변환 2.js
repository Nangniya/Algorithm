const input = require("fs").readFileSync(0).toString().trim();

const [str, b] = input.split(" ").map(Number);
const answer = str.toString(b).toUpperCase();

console.log(answer);
