const move = [[1, 0], [-1, 0], [0, 1], [0, -1],
              [2, 0], [-2, 0], [0, 2], [0, -2],
             [1, 1], [-1, -1], [1, -1], [-1, 1]];

function solution(places) {
    const answer = [];
    
    const roomCheck = (room) => {
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if(room[i][j] === 'P') {
                    for(let [dr, dc] of move) {
                        const dist = Math.abs(dr) + Math.abs(dc);
                        const [r, c] = [i + dr, j + dc];
                        if(r < 0 || r >= 5 || c < 0 || c >= 5) continue;
                        if(room[r][c] === 'P') {
                            if(dist === 1) return 0;
                            if(dr === 2 && room[i + 1][j] !== 'X') return 0;
                            if(dr === -2 && room[i - 1][j] !== 'X') return 0;
                            if(dc === 2 && room[i][j + 1] !== 'X') return 0;
                            if(dc === -2 && room[i][j - 1] !== 'X') return 0;
                            if(Math.abs(dr) === 1 && Math.abs(dc) === 1) {
                                if(room[i + dr][j] !== 'X' || room[i][j + dc] !== 'X') return 0;
                            }
                        } 
                    }
                }
            }
        }
        return 1;
    }
    
    for(const room of places) {
        answer.push(roomCheck(room));
    }
    return answer;
}