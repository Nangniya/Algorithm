def solution(places):
    answer = []
    directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0], # 상하좌우
        [1, 1], [1, -1], [-1, 1], [-1, -1], # 대각선
        [2, 0], [0, 2], [-2, 0], [0, -2]  # 거리 2
    ]
    def check(place):
        for i in range(5):
            for j in range(5):
                if place[i][j] == 'P':
                    for dr, dc in directions:
                        r, c = dr + i, dc + j
                        dist = abs(dr) + abs(dc)
                        if 0 <= r < 5 and 0 <= c < 5:
                            if place[r][c] == 'P':
                                if dist == 1:
                                    return 0
                                if dr == 2 and place[i + 1][j] != 'X':
                                    return 0
                                if dc == 2 and place[i][j + 1] != 'X':
                                    return 0
                                if dr == -2 and place[i - 1][j] != 'X':
                                    return 0
                                if dc == -2 and place[i][j - 1] != 'X':
                                    return 0
                                if abs(dr) == 1 and abs(dc) == 1:
                                    if place[r][j] != 'X' or place[i][c] != 'X':
                                        return 0
        return 1
    
    for place in places:
        answer.append(check(place))
    return answer