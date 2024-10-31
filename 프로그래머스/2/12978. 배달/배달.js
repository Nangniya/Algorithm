class MinHeap {
    constructor() {
        this.items = [];
    }
    
    size() {
        return this.items.length;
    }
    
    insert(item) {
        this.items.push(item);
        this.bubbleUp();
    }
    
    pop() {
        if(this.size() === 0) return null;
        
        const min = this.items[0];
        this.items[0] = this.items[this.size() - 1];
        this.items.pop();
        this.bubbleDown();
        return min;
    }
    
    swap(a, b) {
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if(this.items[parentIndex] <= this.items[index]) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            let smallerChild = 
                rightChild < this.size && 
                this.items[rightChild] < this.items[leftChild] 
            ? rightChild : leftChild;
            
            if(this.items[index] <= this.items[smallerChild]) {
                break;
            }
            
            this.swap(index, smallerChild);
            index = smallerChild;
        }
    }
}

function solution(N, road, K) {
    const graph = Array.from({length: N + 1}, () => []);
    const distances = Array(N + 1).fill(Infinity);
    distances[1] = 0;
    
    for (const [a, b, dist] of road) {
        graph[a].push([b, dist]);
        graph[b].push([a, dist]);
    }
    
    const heap = new MinHeap();
    heap.insert([0, 1]);
    while(heap.size() > 0) {
        const [dist, node] = heap.pop();
        for (const [nextNode, nextDist] of graph[node]) {
            const cost = dist + nextDist;
            if(cost < distances[nextNode]) {
                distances[nextNode] = cost;
                heap.insert([cost, nextNode]);
            }
        }
    }
    return distances.filter((dist) => dist <= K).length;
}