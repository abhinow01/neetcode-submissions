class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let map = new Map();
      for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1)   
        }
        else{
            map.set(nums[i] , 1)
        }
      }
       let sortedMap = Array.from(map.entries());
       sortedMap.sort((a,b)=> b[1] -a[1] )
       return sortedMap.slice(0, k).map(entry => entry[0]);
    }
}
