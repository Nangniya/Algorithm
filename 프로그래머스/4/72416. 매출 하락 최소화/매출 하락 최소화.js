function solution(sales, links) {
    const team = new Map();
    for (const [head, member] of links) {
        if (!team.has(head)) team.set(head, []);
        team.get(head).push(member);
    }
    // dp[i][0]: i가 불참할 때, i의 하위 팀들의 최소 비용
    // dp[i][1]: i가 참석할 때, i의 하위 팀들의 최소 비용
    const dp = Array.from({ length: sales.length + 1 }, () => [0, 0]);
    
    function dfs(curr) {
        dp[curr][0] = 0;
        dp[curr][1] = sales[curr - 1];

        if (!team.has(curr)) return; // 팀장이 아닌 경우
        
        let totalSum = 0;
        let isAnyMemberAttending = false;
        let minDiff = Infinity;
        
        for (const member of team.get(curr)) {
            dfs(member); // 자식 노드 먼저 계산

            if (dp[member][0] < dp[member][1]) {
                totalSum += dp[member][0];
                // 나중에 강제로 한 명 보낼 때를 대비해 비용 차이 저장
                minDiff = Math.min(minDiff, dp[member][1] - dp[member][0]);
            } else {
                totalSum += dp[member][1];
                isAnyMemberAttending = true;
            }
        }
        // 팀장이 참석하면 팀원들은 가든 말든 상관없음
        dp[curr][1] += totalSum;
        // 팀장이 참석 안하면 -> 자기가 가는게 이득인 팀원이 있으면 팀원의 비용 / 없으면 강제로 하나 보냄.
        dp[curr][0] = isAnyMemberAttending ? totalSum : totalSum + minDiff
    }
    
    dfs(1);
    return Math.min(dp[1][0], dp[1][1]);
}