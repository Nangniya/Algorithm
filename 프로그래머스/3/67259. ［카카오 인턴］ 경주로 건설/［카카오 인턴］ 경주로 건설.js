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


function solution(board) {
    
    function isValid(x, y) {
        return 0 <= x && x < N && 0 <= y && y < N;
    }
    
    function isBlocked(x, y) {
        return (x === 0 && y === 0) || !isValid(x, y) || board[x][y] === 1;
    }
    
    function calculateCost(direction, prevDirection, cost) {
        return (prevDirection === -1 || (prevDirection - direction) % 2 === 0) 
            ? cost + 100 
            : cost + 600;
    }
    
    function isShouldUpdate(x, y, direction, newCost) {
        return visited[x][y][direction] === 0 || visited[x][y][direction] > newCost;
    }
    
    const queue = new Queue();
    queue.push([0, 0, -1, 0]);
    const N = board.length;
    const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]]; // 하 좌 상 우
    const visited = Array.from({length: N}, () => 
        Array.from({length: N}, () => Array(4).fill(0))
    );
    let answer = Infinity;
    
    while (!queue.isEmpty()) {
        const [x, y, prevDirection, cost] = queue.pop();
        
        for (let direction = 0; direction < 4; direction++) {
            const [dx, dy] = directions[direction];
            const newX = x + dx;
            const newY = y + dy;
            
            if(isBlocked(newX, newY)) {
                continue;
            }
            
            const newCost = calculateCost(direction, prevDirection, cost);
            if(newX === N - 1 && newY === N - 1) {
                answer = Math.min(answer, newCost);
            } else if(isShouldUpdate(newX, newY, direction, newCost)) {
                queue.push([newX, newY, direction, newCost]);
                visited[newX][newY][direction] = newCost;
            }
        }
    }
    return answer;
}