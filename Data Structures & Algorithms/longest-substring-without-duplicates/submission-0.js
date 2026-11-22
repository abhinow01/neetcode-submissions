class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let largestString = 0;
        let seen = new Set()
        while (right<s.length){
            while(seen.has(s[right])){
                seen.delete(s[left]);
                left++;
            }
            
            seen.add(s[right])
            largestString = Math.max(largestString, seen.size);
            right++;
        }
         
        return largestString;
    }
}
