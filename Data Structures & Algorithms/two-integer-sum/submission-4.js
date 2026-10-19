class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // let n = nums.length ;
        // for(let k=0;k<n;k++){
        //     for(let i=k+1;i<n;i++){
        //         if(nums[i] + nums[k] === target){
        //             return [i , k] ;
        //         }
        //     }
        // }
// <-------        complement = target - current ------>
      const map = new Map()
      let complement;
      for(let i=0;i<nums.length;i++){
        complement = target - nums[i];
        if(map.has(complement)){
        return [map.get(complement), i]
        }
        map.set(nums[i], i)
      }


        return []
    }
}
