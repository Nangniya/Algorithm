from collections import deque
import math

def solution(progresses, speeds):
    days = [0] * len(progresses)
    queue = deque()
    deploys = []
    for i in range(len(progresses)):
        days[i] = math.ceil((100 - progresses[i]) / speeds[i])
    print(days)
    front = days[0]
    queue.append(front)
    
    for i in range(1, len(days)):
        if front < days[i]:
            count = 0
            while len(queue) > 0:
                queue.popleft()
                count += 1
            deploys.append(count)
            front = days[i]
                
        queue.append(days[i])
    
    if len(queue) > 0:
        deploys.append(len(queue))
        
    return deploys