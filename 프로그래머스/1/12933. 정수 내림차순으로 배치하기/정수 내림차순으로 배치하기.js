function solution(n) {
    return Number(Array.from(String(n)).sort((a, b) => b - a).join(''))
}