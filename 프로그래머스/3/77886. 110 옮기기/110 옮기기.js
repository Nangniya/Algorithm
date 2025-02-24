function solution(s) {
    const answer = [];
    for(const str of s) {
        const stack = [];
        let count = 0;
        for(const char of str) {
            stack.push(char);
            if(stack[stack.length - 3] === '1' &&
              stack[stack.length - 2] === '1' &&
              stack[stack.length - 1] === '0') {
                count++;
                stack.splice(-3);
            }
        }
        const idx = stack.lastIndexOf('0');
        if(idx === -1) {
            answer.push('110'.repeat(count) + stack.join(''));
        } else {
            stack.splice(idx + 1, 0, '110'.repeat(count));
            answer.push(stack.join(''));
        }
    }
    return answer;
}