class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedNums = [...nums].sort((a, b) => a - b);
        let result =[];
        for(let i=0;i<sortedNums.length - 2;i++){
            let left = i+1;
            let right =sortedNums.length - 1;
            
            if(i>0 && sortedNums[i-1] === sortedNums[i]){
                continue;
            }
            while(left<right){
                let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
                if(sum === 0){
                    result.push([sortedNums[i] , sortedNums[left] , sortedNums[right]]);
                    left++;
                    right--;
                    while(left<right && sortedNums[left] === sortedNums[left - 1]){
                        left++
                    }
                    while(left<right && sortedNums[right] === sortedNums[right+1]){
                        right--;
                    }
                }else if(sum<0){
                    left++;
                }else{
                    right--;
                }
            }
            
        }
        return result;
    }
}
