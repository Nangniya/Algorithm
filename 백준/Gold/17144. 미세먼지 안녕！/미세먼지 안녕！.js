const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C, T] = input[0].split(' ').map(Number);
const board = input.slice(1, R + 1).map(line => line.trim().split(' ').map(Number));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function isInBound(r, c, n, m) {
    return r >= 0 && r < n && c >= 0 && c < m;
}

const AC = [];
for (let r = 0; r < R; r++) {
    if (board[r][0] === -1) AC.push(r);
}

function spread() {
    const addBoard = Array.from({ length: R }, () => Array(C).fill(0));
    // 1. 미세먼지 확산
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (board[r][c] <= 0) continue;

            let amount = Math.floor(board[r][c] / 5);

            for (let i = 0; i < 4; i++) {
                const [nr, nc] = [r + dr[i], c + dc[i]];

                if (isInBound(nr, nc, R, C) && board[nr][nc] !== -1) {
                    addBoard[nr][nc] += amount;
                    board[r][c] -= amount;
                }
            }
        }
    }
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            board[r][c] += addBoard[r][c];
        }
    }
};

function clean() {
    const top = AC[0];
    const bottom = AC[1];

    // 위쪽 공기청정기 (반시계 방향)
    // 아래로 당기기
    for (let i = top - 1; i > 0; i--) board[i][0] = board[i - 1][0];
    // 왼쪽으로 당기기
    for (let i = 0; i < C - 1; i++) board[0][i] = board[0][i + 1];
    // 위로 당기기
    for (let i = 0; i < top; i++) board[i][C - 1] = board[i + 1][C - 1];
    // 오른쪽으로 당기기
    for (let i = C - 1; i > 1; i--) board[top][i] = board[top][i - 1];
    board[top][1] = 0;

    // 아래쪽 공기청정기 (시계 방향)
    // 위로 당기기
    for (let i = bottom + 1; i < R - 1; i++) board[i][0] = board[i + 1][0];
    // 왼쪽으로 당기기
    for (let i = 0; i < C - 1; i++) board[R - 1][i] = board[R - 1][i + 1];
    // 아래로 당기기
    for (let i = R - 1; i > bottom; i--) board[i][C - 1] = board[i - 1][C - 1];
    // 오른쪽으로 당기기
    for (let i = C - 1; i > 1; i--) board[bottom][i] = board[bottom][i - 1];
    board[bottom][1] = 0;
}

for (let t = 0; t < T; t++) {
    spread();
    clean();
}

let totalDust = 0;
for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
        if (board[r][c] > 0) totalDust += board[r][c];
    }
}

console.log(totalDust);