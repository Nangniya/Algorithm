class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums) - 1):
            answer = [0, 1];
            for j in range(i + 1, len(nums)):
                if(nums[i] + nums[j] == target):
                    answer[0] = i;
                    answer [1] = j;
                    return answer;
        