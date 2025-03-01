function solution(gems) {
  let answer = [0, gems.length];
  const totalSize = new Set(gems).size;
    
  let left = 0, right = 0;
  const gemsCount = new Map();
  gemsCount.set(gems[0], 1);

  while (left < gems.length && right < gems.length) {
    if (gemsCount.size === totalSize) {
      // 더 짧은 경우에만 갱신(같을 때는 X)
      if (right - left < answer[1] - answer[0]) answer = [left + 1, right + 1];

      // left 늘려서 범위 좁히기
      gemsCount.set(gems[left], gemsCount.get(gems[left]) - 1);
      if (gemsCount.get(gems[left]) === 0) gemsCount.delete(gems[left]);
        
      left++;
    } else {
      // 모든 보석 포함할 때까지 right 늘려서 범위 넓히기
      right++;
      if (right >= gems.length) break;
      gemsCount.set(gems[right], (gemsCount.get(gems[right]) || 0) + 1);
    }
  }

  return answer;
}