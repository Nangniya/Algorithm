function solution(n)
{
    let answer = 1;
    
    while(n > 2) {
        if(n % 2 === 1) {
            n -= 1;
            answer++;
        }
        n = n / 2;
    }
    
    return answer;
}