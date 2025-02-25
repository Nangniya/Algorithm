function solution(queue1, queue2) {
    const sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    const sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const totalSum = sum1 + sum2;
    if (totalSum % 2 !== 0) return -1;
    
    const queue = [...queue1, ...queue2];
    const targetSum = totalSum / 2;
    let currentSum = sum1;
    let left = 0;
    let right = queue1.length;
    const maxMoves = queue1.length * 3;
    
    for(let moves = 0; moves < maxMoves; moves++) {
        if (currentSum === targetSum) return moves;
        
        if (currentSum > targetSum) currentSum -= queue[left++];
        else currentSum += queue[right++ % queue.length];
    }
    
    return -1;
}