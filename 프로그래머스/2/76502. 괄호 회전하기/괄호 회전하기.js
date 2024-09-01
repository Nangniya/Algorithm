function solution(s) {
    let answer = 0;
    for(let i = 0; i < s.length; i++){
        const arr = s.split('');
        for(let j = 0; j < i; j++){
            arr.push(arr.shift());
        }
        const stack = [];
        let isCorect = true;
        for(item of arr){
            if(item === '[' || item === '{' || item === '('){
                stack.push(item);
            } else {
                if(stack.length === 0) {
                    isCorect = false;
                    break;
                }
                const last = stack[stack.length - 1];
                if((item === ']' && last === '[') || (item === '}' && last === '{') || (item === ')' && last === '(')){
                    stack.pop();
                } else {
                    isCorect = false;
                    break;
                }
            }
        }
        if(isCorect && stack.length === 0) answer += 1;
    }
    return answer;
}