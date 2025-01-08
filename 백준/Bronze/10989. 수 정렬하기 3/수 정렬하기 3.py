import sys

n = int(sys.stdin.readline())
nums = [0] * 10001  # 0부터 10000까지의 카운트 배열

# 각 숫자 개수 카운트
for _ in range(n):
   nums[int(sys.stdin.readline())] += 1

# 카운트 된 숫자만큼 출력
for i in range(10001):
   if nums[i] != 0:  # 해당 숫자가 있으면
       for _ in range(nums[i]):  # 카운트된 횟수만큼
           print(i)