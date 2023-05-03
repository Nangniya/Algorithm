let input = require('fs').readFileSync(0).toString().trim();
let N = Number(input);
let answer = 0;
while(N > 0){
    if(N % 5 == 0) {
        N -= 5;
    } else {
        N -= 3;
    }
    answer += 1;
}
console.log(N == 0 ? answer : -1);