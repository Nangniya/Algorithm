class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function isValidMove(ny, nx, n, m, maps) {
    return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] != 'X';
}

function appendToQueue(ny, nx, k, time, visited, q) {
    if(!visited[ny][nx][k]){
        visited[ny][nx][k] = true;
        q.push([ny, nx, k, time + 1]);
    }
}

function solution(maps) {
    const n = maps.length; 
    const m = maps[0].length;
    // 좌표 + 레버당김여부 [안당겼을때, 당겼을때]
    const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));
    
    // 상, 하, 좌, 우
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const q = new Queue();
    let endY = -1;
    let endX = -1;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maps[i][j] === 'S') {
                q.push([i, j, 0, 0]);
                visited[i][j][0] = true;
            }
            if(maps[i][j] === 'E') {
                endY = i;
                endX = j;
            }
        }
    }
    
    while(!q.isEmpty()) {
        // 좌표, 레버여부, 이동 횟수
        const [y, x, k, time] = q.pop();
        
        // 도착점에 도달 & 레버 당김
        if(y === endY && x === endX && k === 1) {
            return time;
        }
        
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if(!isValidMove(ny, nx, n, m, maps)) {
                continue;
            }
            
            if(maps[ny][nx] === 'L') {
                appendToQueue(ny, nx, 1, time, visited, q);
            } else {
                appendToQueue(ny, nx, k, time, visited, q);
            }
        }
    }
    return -1
}