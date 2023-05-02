let input = require('fs').readFileSync(0).toString().trim().split(' ');
console.log(input[0] === "" ? 0 : input.length);