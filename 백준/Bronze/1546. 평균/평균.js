let input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const list = input[1].split(' ').map(Number);
const M = Math.max(...list);
const list1 = list.map(e => e / M * 100);
const sum = list1.reduce((acc, curr) => acc + curr, 0);
console.log(sum / N);