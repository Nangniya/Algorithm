import sys
input = sys.stdin.readline

from itertools import combinations_with_replacement

N, M = map(int, input().split())
result = combinations_with_replacement(range(1, N + 1), M)

print("\n".join(" ".join(map(str, perm)) for perm in result))