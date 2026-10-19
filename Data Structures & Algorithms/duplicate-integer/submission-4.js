class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        //first method 
        // for(let i=0;i<nums.length;i++){
        //     for(let j = i+1;j<nums.length;j++){
        //         if(nums[i] === nums[j]){
        //             return true 
        //         }
        //     }
        // }
        // return false 

        //second method 
        // nums.sort((a,b)=>a-b);
        // for(let i=1;i<nums.length;i++){
        //     if(nums[i] === nums[i-1]){
        //         return true 
        //     }
        // }
        // return false 

        //third method 

        const seenValues = new Set();
        for(const values of nums ){
            if(seenValues.has(values)){
                return true 
            }
            seenValues.add(values)
        }
        return false 

    }
}
