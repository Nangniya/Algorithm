import heapq
import sys

input = sys.stdin.readline

N, K = map(int, input().split())
jewels = [list(map(int, input().split())) for _ in range(N)]
bags = [int(input()) for _ in range(K)]

jewels.sort(key=lambda x: x[0])
bags.sort()

jewels_idx = 0
heap = []
answer = 0

for weight in bags:
    while jewels_idx < N and jewels[jewels_idx][0] <= weight:
        heapq.heappush(heap, -jewels[jewels_idx][1])
        jewels_idx += 1

    if heap:
        answer -= heapq.heappop(heap)

print(answer)