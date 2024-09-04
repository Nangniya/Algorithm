function solution(cards1, cards2, goal) {
    const queue = [];
    let one = 0;
    let two = 0;
    for(let i = 0; i < goal.length; i++){
        if(cards1[one] === goal[i]) queue.push(cards1[one++])
        if(cards2[two] === goal[i]) queue.push(cards2[two++]);
    }
    return goal.join('') === queue.join('') ? "Yes" : "No"
}