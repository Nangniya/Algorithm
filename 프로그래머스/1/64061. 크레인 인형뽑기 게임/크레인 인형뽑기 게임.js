function solution(board, moves) {
    const n = moves.length;
    const stack = [];
    let answer = 0;
    for(let i = 0; i < n; i++){
        const place = moves[i] - 1;
        for(let j = 0; j < board.length; j++){
            if(board[j][place] !== 0){
                const item = board[j][place];
                if(stack.length > 0 && stack[stack.length - 1] === item){
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(item);
                }
                board[j][place] = 0;
                break;
            }
        }
    }
    console.log(stack, board)
    return answer;
}