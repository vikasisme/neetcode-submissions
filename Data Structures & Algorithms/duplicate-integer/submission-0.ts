class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = {};
        let isDuplicate = false;

        for(let i=0; i<nums.length; i++){
            if(map[nums[i]]){
                isDuplicate = true;
                break;
            } else {
                map[nums[i]] = true;
            }
        }

        return isDuplicate;
    }
}
