class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minWindow = Infinity 
        let left = 0;
        let sum = 0;
        for(let right = 0;right<nums.length;right++){
            sum = sum + nums[right];
            while(sum >=target){
                minWindow = Math.min(minWindow , right-left+1)
                sum -=nums[left];
                left ++;
            }
        }
        
        return minWindow === Infinity ? 0 : minWindow
    }
}
