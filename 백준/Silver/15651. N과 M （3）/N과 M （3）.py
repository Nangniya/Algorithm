import sys
input = sys.stdin.readline

from itertools import product

N, M = map(int, input().split())
result = product(range(1, N + 1), repeat=M)

print("\n".join(" ".join(map(str, perm)) for perm in result))