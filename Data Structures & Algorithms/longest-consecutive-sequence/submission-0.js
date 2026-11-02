
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        if (nums.length === 0) return 0;

        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let count = 1;
                let currentNum = num;
                // start counting from begining of a sequence and keep checking consecutive numbers 
                while (numSet.has(currentNum + 1)) {
                    count++;
                    currentNum++;
                }
                // track the longest sequence 
                longest = Math.max(longest, count);
            }
        }

        return longest;
    }
}
