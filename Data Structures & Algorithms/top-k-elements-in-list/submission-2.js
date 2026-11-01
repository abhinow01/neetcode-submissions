class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        // count frequency 
        for(const num of nums){
            map.set(num , (map.get(num)|| 0) + 1) 
        }
        // create buckets indexed by frequency 
        const buckets = Array.from(
            {length: nums.length + 1},
            ()=>[]
        )
        // place each number in its frequency bucket 
        for(const [num , freq] of map.entries()){
            buckets[freq].push(num)
        }
        //collect the k most frequent number 
        const result = [];
        for(let i=buckets.length - 1; i>=1 ; i--){
            for (const num of buckets[i]){
                result.push(num)
            
            if(result.length === k){
                return result 
            }
        }
        }
        return result;
    }
}
