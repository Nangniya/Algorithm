function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = Array(3).fill(0);
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === one[i % 5]) score[0]++
        if(answers[i] === two[i % 8]) score[1]++
        if(answers[i] === three[i % 10]) score[2]++
    }
    const max = Math.max(...score);
    const answer = [];
    for(let j = 0; j < 3; j++){
        if(score[j] === max) answer.push(j + 1);
    }
    return answer;
}