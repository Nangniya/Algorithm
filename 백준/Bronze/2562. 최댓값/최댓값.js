let input = require('fs').readFileSync(0).toString().trim();
const data = input.split('\n');
let max = 0;
let N = 0;
for(let i = 0; i < data.length; i++){
    if(parseInt(data[i]) >= max){
        max = parseInt(data[i]);
        N = i + 1;
    }
}
console.log(max + '\n' + N);