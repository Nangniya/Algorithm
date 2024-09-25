class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function buildTree(info, edges) {
    const tree = Array.from({ length: info.length }, () => []);
    for(const [from, to] of edges) {
        tree[from].push(to);
    }
    return tree;
}

function solution(info, edges) {
    const tree = buildTree(info, edges);
    let maxSheep = 0;
    
    const q = new Queue();
    q.push([0, 1, 0, new Set()]); // 현재 위치, 양 수, 늑대 수, 방문한 노드 집합
    
    while(!q.isEmpty()) {
        const [current, sheepCount, wolfCount, reachableNodes] = q.pop();
        maxSheep = Math.max(maxSheep, sheepCount);
        for(const next of tree[current]) {
            reachableNodes.add(next);
        }
        for(const next of reachableNodes) {
            if(info[next]) { // 늑대일 경우
                // 늑대 수가 양의 수와 같거나 커지지 않을 경우에만 
                if(sheepCount !== wolfCount + 1) { 
                    const newreachableNodes = new Set(reachableNodes);
                    newreachableNodes.delete(next);
                    q.push([next, sheepCount, wolfCount + 1, newreachableNodes]);
                }
            } else { // 양일 경우
                const newreachableNodes = new Set(reachableNodes);
                newreachableNodes.delete(next)
                q.push([next, sheepCount + 1, wolfCount, newreachableNodes])
            }
        }
    }
    return maxSheep;
}