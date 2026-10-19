class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // method 1 
        // for(let i =0;i<nums.length ; i++){
        //     for(let j = i+1;j<=nums.length;j++){
        //         if(nums[i] + nums[j]=== target){
        //             return [i,j]
        //         }
        //     }
        // }

        // method 2 
         const map = new Map();
         for(let i=0;i<nums.length;i++){
            const num = nums[i];
            const complement = target - num ;
            const sumIndex = map.get(complement);
            const isTarget = map.has(complement)
            if(isTarget){
                return [i, sumIndex]
            }
            map.set(num, i)
         }
         return [-1,-1]
    }
}
