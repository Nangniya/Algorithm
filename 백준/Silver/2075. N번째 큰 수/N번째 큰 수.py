import heapq
import sys

input = sys.stdin.readline

def solve():
    n = int(input())
    min_heap = []

    for _ in range(n):
        nums = map(int, input().split())
        
        for num in nums:
            heapq.heappush(min_heap, num)
            
            if len(min_heap) > n:
                heapq.heappop(min_heap)

    print(min_heap[0])

if __name__ == "__main__":
    solve()