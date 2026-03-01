import sys
from itertools import combinations
input = sys.stdin.readline

def solve():
    n, m = map(int, input().split())
    houses = []
    chickens = []

    for r in range(n):
        row = list(map(int, input().split()))
        for c in range(n):
            if row[c] == 1:
                houses.append((r, c))
            if row[c] == 2:
                chickens.append((r, c))
    
    min_city_dist = float('inf')

    for selected_chickens in combinations(chickens, m):
        city_dist = 0
        for hr, hc in houses:
            dist = float('inf')
            for cr, cc in selected_chickens:
                dist = min(dist, abs(hr - cr) + abs(hc - cc))
            city_dist += dist
        min_city_dist = min(min_city_dist, city_dist)

    print(min_city_dist)

if __name__ == "__main__":
    solve()