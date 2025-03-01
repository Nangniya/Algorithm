function solution(board, skill) {
    const [R, C] = [board.length, board[0].length];
    const DP = Array.from({length : R}, () => Array(C).fill(0));
    for(const [type, r1, c1, r2, c2, degree] of skill) {
        const d = type === 1 ? -degree : degree;
        DP[r1][c1] += d;
        if(r2 + 1 < R) DP[r2 + 1][c1] -= d;
        if(c2 + 1 < C) DP[r1][c2 + 1] -= d;
        if(r2 + 1 < R && c2 + 1 < C) DP[r2 + 1][c2 + 1] += d;
    }
    let answer = 0;
    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++) {
            const top = i > 0 ? DP[i - 1][j] : 0;
            const left = j > 0 ? DP[i][j - 1] : 0;
            const intersection = i > 0 && j > 0 ? DP[i - 1][j - 1] : 0;
            DP[i][j] += top + left - intersection;
            if(DP[i][j] + board[i][j] > 0) answer++;
        }
    }
    return answer;
}