function solution(k, num, links) {
    const parent = Array(num.length).fill(-1);
    for (const [i, [left, right]] of links.entries()) {
        if (left !== -1) parent[left] = i;
        if (right !== -1) parent[right] = i;
    }
    const root = parent.findIndex(n => n === -1);
    
    // 재귀 없이 후위 순회(Post-order) 순서 만들기 (스택 활용)
    const postOrder = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (node === -1) continue;
        postOrder.push(node);
        stack.push(links[node][0]); // 왼쪽 자식
        stack.push(links[node][1]); // 오른쪽 자식
    }
    postOrder.reverse(); // 자식들이 부모보다 앞에 오도록 뒤집기

    function check(limit) {
        let count = 0;
        
        const currentSums = Array(num.length).fill(0); // 각 노드에서의 서브트리 합 저장

        // 재귀 대신 반복문으로 하위 노드부터 처리
        for (const node of postOrder) {
            const leftSum = links[node][0] === -1 ? 0 : currentSums[links[node][0]];
            const rightSum = links[node][1] === -1 ? 0 : currentSums[links[node][1]];

            if (num[node] + leftSum + rightSum <= limit) {
                currentSums[node] = num[node] + leftSum + rightSum;
            } else if (num[node] + Math.min(leftSum, rightSum) <= limit) {
                count++;
                currentSums[node] = num[node] + Math.min(leftSum, rightSum);
            } else {
                count += 2;
                currentSums[node] = num[node];
            }
        }
        return count + 1 <= k;
    }
    
    let [low, high] = [Math.max(...num), num.reduce((acc, cur) => acc + cur, 0)];
    let answer = high;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return answer;
}