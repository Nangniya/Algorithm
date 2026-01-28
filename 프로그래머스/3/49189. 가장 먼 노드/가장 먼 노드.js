class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }
    push(item) {
        this.queue[this.tail++] = item;
    }
    pop(item) {
        return this.queue[this.head++];
    }
    isEmpty() {
        return this.head === this.tail;
    }
}

function solution(n, vertex) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [start, end] of vertex) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    const distances = Array(n + 1).fill(-1); // -1이면 아직 방문하지 않음.
    distances[1] = 0;
    
    const queue = new Queue();
    queue.push([1, 0]); // [노드, 거리]
    
    while(!queue.isEmpty()) {
        const [node, dist] = queue.pop();
        for (const neighbor of graph[node]) {
            // 방문하지 않은 노드들만 방문
            if (distances[neighbor] === -1) {
                // 다음 노드의 거리는 지금까지의 거리 + 1
                distances[neighbor] = dist + 1;
                queue.push([neighbor, distances[neighbor]]);
            }
        }
    }
    const max = Math.max(...distances);
    
    return distances.filter(dist => dist === max).length;
}