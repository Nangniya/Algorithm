function solution(s){
    const stack = [];
    for(i of s){
        if(i === "("){
            stack.push(0);
        } else {
            if(stack.length < 1) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    return stack.length === 0
}