import sys
input = sys.stdin.readline

from itertools import combinations

N, M = map(int, input().split())

result = combinations(range(1, N + 1), M)

print("\n".join(" ".join(map(str, comb)) for comb in result))