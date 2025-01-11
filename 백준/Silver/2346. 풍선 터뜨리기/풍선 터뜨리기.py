from collections import deque

n = int(input())
numbers = list(map(int, input().split()))
dq = deque([(i+1, num) for i, num in enumerate(numbers)])  # (index, value) 튜플로 저장
answer = []

while dq:
    # 현재 풍선을 터트림
    index, value = dq.popleft()
    answer.append(index)
    
    if not dq:  # 마지막 풍선이면 종료
        break
        
    # value가 양수면 시계방향(오른쪽), 음수면 반시계방향(왼쪽)으로 회전
    if value > 0:
        dq.rotate(-(value-1))  # 이미 popleft()로 한 칸 이동했으므로 value-1
    else:
        dq.rotate(-value)  # 음수는 그대로 사용하면 반시계방향 회전

print(' '.join(map(str, answer)))