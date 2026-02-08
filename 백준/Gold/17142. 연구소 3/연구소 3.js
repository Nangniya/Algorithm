const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1, N + 1).map(line => line.trim().split(' ').map(Number));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function isInBound(r, c, n) {
    return r >= 0 && r < n && c >= 0 && c < n;
}

function combination(arr, n) {
    if (n === 1) return arr.map(value => [value]);

    const results = [];
    arr.forEach((fixed, index) => {
        const rest = arr.slice(index + 1);
        const combis = combination(rest, n - 1);
        const combine = combis.map(combi => [fixed, ...combi]);
        results.push(...combine);
    });
    return results;
}

class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }
    push(value) {
        this.queue[this.tail++] = value;
    }
    pop() {
        return this.queue[this.head++];
    }
    isEmpty() {
        return this.head === this.tail;
    }
}

function solution() {
    const viruses = [];
    let totalEmpty = 0;

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (board[r][c] === 2) viruses.push([r, c]);
            if (board[r][c] === 0) totalEmpty++;
        }
    }

    if (totalEmpty === 0) return 0;

    const virusCombinations = combination(viruses, M);
    let answer = Infinity;

    virusCombinations.forEach(virusPositions => {
        const visited = Array.from({ length: N }, () => Array(N).fill(-1));
        const queue = new Queue();
        let infectedEmpty = 0;
        let localMaxTime = 0;

        virusPositions.forEach(([r, c]) => {
            visited[r][c] = 0;
            queue.push([r, c, 0]);
        });

        while (!queue.isEmpty()) {
            const [r, c, time] = queue.pop();

            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];

                if (isInBound(nr, nc, N) && visited[nr][nc] === -1 && board[nr][nc] !== 1) {
                    visited[nr][nc] = time + 1;
                
                    if (board[nr][nc] === 0) {
                        infectedEmpty++;
                        localMaxTime = time + 1;
                    }
                
                    queue.push([nr, nc, time + 1]);
                }
            }
        }

        if (infectedEmpty === totalEmpty) {
            answer = Math.min(answer, localMaxTime);
        }
    });

    return answer === Infinity ? -1 : answer;
}

console.log(solution());