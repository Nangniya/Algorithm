function solution(cards1, cards2, goal) {
    const queue = [];
    for(let i = 0; i < goal.length; i++){
        if(cards1[0] === goal[i]) queue.push(cards1.shift());
        if(cards2[0] === goal[i]) queue.push(cards2.shift());
    }
    return goal.join('') === queue.join('') ? "Yes" : "No"
}