class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length ;
        for(let k=0;k<n;k++){
            for(let i=k+1;i<n;i++){
                if(nums[i] + nums[k] === target){
                    return [i , k] ;
                }
            }
        }
        
    }
}
