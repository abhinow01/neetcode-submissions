class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let num = new Map(nums);
        // const recurringValues = new Set();
        // for(let value of num.values()){
        //     if(recurringValues.has(value)){
        //         return true 
        //     }
        //     recurringValues.add(value)
        // }
        // return false 
        for(let i=0;i<nums.length;i++){
            for(let j = i+1;j<nums.length;j++){
                if(nums[i] === nums[j]){
                    return true 
                }
            }
        }
        return false 
    }
}
