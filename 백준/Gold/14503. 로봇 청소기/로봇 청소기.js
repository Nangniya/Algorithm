const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map(Number);
const room = input.slice(2).map(line => line.split(' ').map(Number));

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

const cleaned = Array.from({ length: n }, () => Array(m).fill(false));
let answer = 0;

while (true) {
    if (!cleaned[r][c]) {
        cleaned[r][c] = true;
        answer++;
    }

    let isDirtyExist = false;

    for (let i = 0; i < 4; i++) {
        d = (d + 3) % 4; // 왼쪽으로 회전
        const [nr, nc] = [r + dr[d], c + dc[d]];

        if (nr >= 0 && nr < n && nc >= 0 && nc < m && room[nr][nc] === 0 && !cleaned[nr][nc]) {
            [r, c] = [nr, nc];
            isDirtyExist = true;
            break;
        }
    }

    if (!isDirtyExist) {
        const [br, bc] = [r - dr[d], c - dc[d]];

        if (br < 0 || br >= n || bc < 0 || bc >= m || room[br][bc] === 1) {
            break;
        }
        [r, c] = [br, bc];
    }
}

console.log(answer);