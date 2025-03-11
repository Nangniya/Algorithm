def solution(nums):
    n = len(nums)
    nums_set = set(nums)
    return min(len(nums_set), n / 2)