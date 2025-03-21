def solution(people, limit):
    n = len(people)
    people.sort()
    left, right = 0, n - 1
    twin = 0
    while left < right:
        if people[left] + people[right] <= limit:
            twin += 1
            left += 1
            right -= 1
        else:
            right -= 1
    return n - twin
            