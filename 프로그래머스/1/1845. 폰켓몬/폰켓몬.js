function solution(nums) {
    const M = nums.length / 2;
    const N = new Set(nums).size;
    return Math.min(M, N);
}