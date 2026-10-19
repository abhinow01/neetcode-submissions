class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length === 0) return false
        const check = new Map()
        for(const num of nums){
            if(check.has(num)){
                return true
            }
            else{
                check.set(num , true)
            }
        }
                        return false 

    }
}
