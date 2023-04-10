let input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const set = new Set(input.map(x => x % 42));
console.log(set.size);