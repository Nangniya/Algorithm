class Heap {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator; // 최대 힙과 최소 힙은 비교자만 다르고 같은 구조이다.
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    push(item) {
        this.heap.push(item);
        this.bubbleUp();
    }
    
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        
        return top;
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            
            // index가 parent보다 우선순위가 낮으면 올리는 것을 멈춘다. 
            if (this.comparator(this.heap[index], this.heap[parent]) >= 0) break; 
            
            this.swap(index, parent);
            index = parent;
        }
    }
    
    bubbleDown() {
        let index = 0;
        // index의 왼쪽 자식이 존재할 동안
        while (index * 2 + 1 < this.heap.length) {
            let child = index * 2 + 1; // 처음 비교 대상은 왼쪽 자식이다.
            
            if (child + 1 < this.heap.length && // 1. 오른쪽 자식이 존재하는가?
                // 2. 오른쪽 자식이 왼쪽 자식보다 우선순위가 높은가? -> 비교 대상을 오른쪽 자식으로 변경
                this.comparator(this.heap[child + 1], this.heap[child]) < 0) child++;
            
            // index가 parent보다 우선순위가 높으면 내리는 것을 멈춘다.
            if (this.comparator(this.heap[index], this.heap[child]) <= 0) break; 
            
            this.swap(index, child);
            index = child;
        }
    }
    
    peek() { return this.heap[0]; }
    
    size() { return this.heap.length; }
}

function solution(operations) {
    
    const minHeap = new Heap((a, b) => a.val - b.val);
    const maxHeap = new Heap((a, b) => b.val - a.val);
    const visited = {}; // 각 숫자의 유효성 체크 (ID 기준)
    
    operations.forEach((op, i) => {
        const [command, value] = op.split(' ');
        const num = Number(value);
        
        if (command === 'I') {
            const node = { val: num, id: i }; // id는 operation의 index이다.
            minHeap.push(node);
            maxHeap.push(node);
            visited[i] = true; // visited가 true여야 유효한 값이다. (삭제되지 않은 값이다.)
        }
        
        if (command === 'D') {
            const targetHeap = num === 1 ? maxHeap : minHeap;
            // 이미 다른 쪽에서 삭제된 노드는 걷어내기 (Lazy Deletion)
            while (targetHeap.size() > 0 && !visited[targetHeap.peek().id]) {
                targetHeap.pop();
            }
            if (targetHeap.size() > 0) {
                const popped = targetHeap.pop();
                visited[popped.id] = false; // 해당 노드를 삭제됨 처리
            }
        }
    })
    
    // 최종 결과 도출 전 유효하지 않은 값 정리
    while (minHeap.size() > 0 && !visited[minHeap.peek().id]) minHeap.pop();
    while (maxHeap.size() > 0 && !visited[maxHeap.peek().id]) maxHeap.pop();

    return minHeap.size() === 0 ? [0, 0] : [maxHeap.peek().val, minHeap.peek().val];
}