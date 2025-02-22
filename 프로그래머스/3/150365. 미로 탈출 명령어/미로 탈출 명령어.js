function solution(n, m, x, y, r, c, k) {
  const directions = ['d', 'l', 'r', 'u'];
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];
  
  const dist = Math.abs(r - x) + Math.abs(c - y); // 최단거리
  
  if (dist > k || (k - dist) % 2 !== 0) return "impossible";
  
  let answer = "";
  
  while (k > 0) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      
      if (nx > 0 && nx <= n && ny > 0 && ny <= m) {
        const remainingDist = Math.abs(r - nx) + Math.abs(c - ny);
        
        if (remainingDist <= k - 1) {
          answer += directions[i];
          x = nx;
          y = ny;
          k--;
          break;
        }
      }
    }
  }
  
  return answer;
}