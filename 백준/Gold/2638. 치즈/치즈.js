const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1, R + 1).map(line => line.split(' ').map(Number));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function isMovable(r, c, n, m) {
    return r >= 0 && r < n && c >= 0 && c < m;
}

function solution() {
    let answer = 0; 
    
    while (true) {  
        const visited = Array.from({ length: R }, () => Array(C).fill(false));
        const airCount = Array.from({ length: R }, () => Array(C).fill(0));

        // 1. 외부 공기 탐색 및 치즈와 접촉한 외부 공기 표시
        let queue = [[0, 0]];
        visited[0][0] = true;  
        let head = 0;

        while (head < queue.length) {
            const [r, c] = queue[head++];

            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];

                if (isMovable(nr, nc, R, C) && !visited[nr][nc]) {
                    if (grid[nr][nc] === 0) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    } else if (grid[nr][nc] === 1) {
                        // 치즈를 만나면 "외부 공기와 접촉함"을 표시
                        // 여기서 방문 처리를 하지 않아야 다른 쪽 공기에서도 이 치즈를 셀 수 있음
                        airCount[nr][nc]++;
                    }
                }
            }
        }

        // 2. 치즈 녹이기
        let melted = false;
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (airCount[i][j] >= 2) {
                    grid[i][j] = 0;
                    melted = true;
                }
            }
        }

        if (!melted) break; // 더 이상 녹을 치즈가 없으면 종료
        answer++;
    }    
    console.log(answer);
}

solution();