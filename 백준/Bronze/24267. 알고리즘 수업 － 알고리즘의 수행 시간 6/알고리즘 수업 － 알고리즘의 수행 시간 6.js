const input = require("fs").readFileSync(0).toString().trim();
const n = BigInt(input);
console.log(`${(n * (n - 1n) * (n - 2n)) / 6n}\n3`);