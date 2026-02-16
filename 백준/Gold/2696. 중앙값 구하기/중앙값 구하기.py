import heapq
import sys

input = sys.stdin.readline

def solve():
    m = int(input())
    nums = []
    # 한 줄에 10개씩 들어오는 입력을 모두 리스트에 담기
    while len(nums) < m:
        nums.extend(map(int, input().split()))

    max_heap = [] # 중앙값보다 작은 쪽 (최대 힙, 파이썬은 -를 붙여 구현)
    min_heap = [] # 중앙값보다 큰 쪽 (최소 힙)
    medians = []

    for i in range(m):
        val = nums[i]
        
        if len(max_heap) == len(min_heap):
            heapq.heappush(max_heap, -val)
        else:
            heapq.heappush(min_heap, val)
        
        # 최대 힙의 루트가 최소 힙의 루트보다 크면 스왑
        if min_heap and (-max_heap[0] > min_heap[0]):
            max_val = -heapq.heappop(max_heap)
            min_val = heapq.heappop(min_heap)
            heapq.heappush(max_heap, -min_val)
            heapq.heappush(min_heap, max_val)
            
        if (i + 1) % 2 == 1:
            medians.append(-max_heap[0])

    print(len(medians))
    for i in range(len(medians)):
        print(medians[i], end=' ')
        if (i + 1) % 10 == 0: # 10개씩 끊어 출력
            print()
    if len(medians) % 10 != 0:
        print()

t = int(input())
for _ in range(t):
    solve()