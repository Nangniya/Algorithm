const [A, B] = require("fs").readFileSync(0).toString().trim().split('\n').map(Number);

console.log(A * B);