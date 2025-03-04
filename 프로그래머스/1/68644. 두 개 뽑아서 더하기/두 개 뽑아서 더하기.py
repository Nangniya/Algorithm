def solution(numbers):
    sum_set = set()
    for i in range(len(numbers) - 1):
        for j in range(i + 1, len(numbers)):
            sum_set.add(numbers[i] + numbers[j])
    return sorted(list(sum_set))