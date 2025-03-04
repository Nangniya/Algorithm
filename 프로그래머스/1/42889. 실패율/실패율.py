def solution(N, stages):
  challenger = [0] * (N + 2)
  for stage in stages:
    challenger[stage] += 1
  
  fails = { } 
  total = len(stages) 
  
  for i in range(1, N + 1):
    if challenger[i] == 0:
      fails[i] = 0
    else:
      fails[i] = challenger[i] / total
      total -= challenger[i] 

  result = sorted(fails, key=lambda x : fails[x], reverse=True)
  return result