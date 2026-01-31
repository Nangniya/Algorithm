
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function isMovable(r, c, n) {
    return r >= 0 && r < n && c >= 0 && c < n;
}

// target: 0 또는 1
function getBlocks(board, target) {
    const n = board.length;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const blocks = [];
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === target && !visited[r][c]) {
                const block = [];
                const queue = [[r, c]];
                visited[r][c] = true;
                
                let head = 0;
                while (head < queue.length) {
                    const [curR, curC] = queue[head++];
                    block.push([curR, curC]);

                    for (let i = 0; i < 4; i++) {
                        const nr = curR + dr[i];
                        const nc = curC + dc[i];

                        if (isMovable(nr, nc, n) && !visited[nr][nc] && board[nr][nc] === target) {
                            visited[nr][nc] = true;
                            queue.push([nr, nc]);
                        }
                    }
                }
                blocks.push(block);
            }
        }
    }
    return blocks;
}

// 조각들을 표준화하기
function normalize(block) {
    let minR = Infinity;
    let minC = Infinity;
    
    for (const [r, c] of block) {
        minR = Math.min(minR, r);
        minC = Math.min(minC, c);
    }

    // 정렬 기준: 행(r)이 작은 순서 -> 행이 같다면 열(c)이 작은 순서
    return block
        .map(([r, c]) => [r - minR, c - minC])
        .sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
}

// 조각들을 회전시키는 함수
function rotate(block) {
    const rotatedBlock = block.map(([r, c]) => [c, -r]);
    return normalize(rotatedBlock);
}
// 조각이 딱 맞는지 체크하는 함수
function isSame(block1, block2) {
    if (block1.length !== block2.length) return false;
    for (let i = 0; i < block1.length; i++) {
        if (block1[i][0] !== block2[i][0] || block1[i][1] !== block2[i][1]) {
            return false;
        }
    }
    return true;
}

function solution(game_board, table) {
    const blanks = getBlocks(game_board, 0).map(b => normalize(b));
    const puzzles = getBlocks(table, 1).map(p => normalize(p));
    
    const puzzleUsed = Array(puzzles.length).fill(false);
    
    let answer = 0;
    
    for (const blank of blanks) {
        let found = false;
        
        for (let i = 0; i < puzzles.length; i++) {
            if (puzzleUsed[i]) continue;
            if (blank.length !== puzzles[i].length) continue;
        
            let currentPuzzle = puzzles[i];
        
            // 조각을 0도, 90도, 180도, 270도 회전시키며 대조
            for (let r = 0; r < 4; r++) {
                if (isSame(blank, currentPuzzle)) {
                    answer += blank.length;
                    puzzleUsed[i] = true;
                    found = true;
                    break;
                }
                currentPuzzle = rotate(currentPuzzle); // 90도 회전
            }
            
            if (found) break;
        }
    }
    
    return answer;
}