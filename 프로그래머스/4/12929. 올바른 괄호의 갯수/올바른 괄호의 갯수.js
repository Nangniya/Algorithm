function solution(n) {
    let answer = 0;

    function backtrack(left, right) { // left: 사용한 '(' 개수, right: 사용한 ')' 개수
        if (left === n && right === n) {
            answer++;
            return;
        }

        if (left < n) { // '('를 추가할 수 있는 경우
            backtrack(left + 1, right);
        }

        // ')'를 추가할 수 있는 경우 (이미 열린 '(' 보다 적게 썼을 때만)
        if (right < left) {
            backtrack(left, right + 1);
        }
    }

    backtrack(0, 0);
    return answer;
}