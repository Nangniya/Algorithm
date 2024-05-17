function solution(s) {
    return /^[0-9]+$/.test(s) && (s.length === 4 || s.length === 6);
}