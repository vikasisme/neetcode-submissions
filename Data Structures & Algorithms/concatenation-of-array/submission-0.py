class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        arrayLen = len(nums) 
        ans = [0] * 2 * arrayLen

        for i in range(len(nums)):
            ans[i] = nums[i]
            ans[i + arrayLen] = nums[i]
        
        return ans