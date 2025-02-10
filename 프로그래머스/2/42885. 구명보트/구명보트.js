function solution(people, limit) {
    people.sort((a, b) => a - b);
    let answer = 0;
    
    let [i, j] = [0, people.length - 1];
    while(i <= j) {
        if(people[i] + people[j] <= limit) i++;
        j--;
        answer++;
    }
    
    return answer;
}