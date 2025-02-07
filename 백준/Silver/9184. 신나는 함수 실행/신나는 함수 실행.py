import sys

input_data = [list(map(int, line.split())) for line in sys.stdin]
input_data = input_data[:-1]

DP = [[[None] * 101 for _ in range(101)] for _ in range(101)]

def w(a, b, c):
    if a <= 0 or b <= 0 or c <= 0:
        return 1
    if a > 20 or b > 20 or c > 20:
        return w(20, 20, 20)

    if DP[a + 50][b + 50][c + 50] is not None:
        return DP[a + 50][b + 50][c + 50]
    
    if a < b and b < c:
        DP[a + 50][b + 50][c + 50] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c)
    else:
        DP[a + 50][b + 50][c + 50] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)

    return DP[a + 50][b + 50][c + 50]

answer = []
for line in input_data:
    a, b, c = line
    answer.append(f"w({a}, {b}, {c}) = {w(a, b, c)}")
    
print("\n".join(answer))