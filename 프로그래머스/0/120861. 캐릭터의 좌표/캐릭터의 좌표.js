function solution(keyinput, board) {
    let [x, y] = [0, 0]
    
    const offSet = [(board[0] - 1) / 2, (board[1] - 1) / 2];
    
    for(const d of keyinput) {
        if(d === 'left') {
            if(x - 1 >= -offSet[0]) x--;
        }
        if(d === 'right') {
            if(x + 1 <= offSet[0]) x++;
        }
        if(d === 'up') {
            if(y + 1 <= offSet[1]) y++;
        }
        if(d === 'down') {
            if(y - 1 >= -offSet[1]) y--;
        }
    }
    
    return [x, y];
}