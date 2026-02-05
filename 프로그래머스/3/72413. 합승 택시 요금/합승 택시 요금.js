function solution(n, s, a, b, fares) {
    const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

    // 자신으로 가는 거리는 0
    for (let i = 1; i <= n; i++) {
        dist[i][i] = 0;
    }

    for (const [start, end, w] of fares) {
        dist[start][end] = w;
        dist[end][start] = w;
    }

    // 플로이드-워셜
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    let answer = dist[s][a] + dist[s][b]; // 초기값: 합승 안 했을 때 각자 가는 길

    for (let i = 1; i <= n; i++) {
        // s -> i (합승 구간) + i -> a (A 단독) + i -> b (B 단독)
        const cost = dist[s][i] + dist[i][a] + dist[i][b];
        answer = Math.min(answer, cost);
    }

    return answer;
}