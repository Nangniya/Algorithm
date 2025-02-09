function solution(board)
{
    const [R, C] = [board.length, board[0].length];
    
    for(let i = 1; i < R; i++) {
        for(let j = 1; j < C; j++) {
            if(board[i][j] === 1) {
                const upLeft = board[i - 1][j - 1];
                const left = board[i][j - 1];
                const up = board[i - 1][j];
                
                board[i][j] = Math.min(upLeft, left, up) + 1;
            }
        }
    }
    
    const sqrt = Math.max(...board.map(row => Math.max(...row)));
    return Math.pow(sqrt, 2);
}