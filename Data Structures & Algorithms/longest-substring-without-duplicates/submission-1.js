class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left =0;
        let right = 0;
        let maxString = 0;
        let seen = new Set();
        while(right<s.length){
            while(seen.has(s[right])){
                seen.delete(s[left]);
                left++
            }
            seen.add(s[right]);
            maxString = Math.max(maxString , seen.size)
            right++;
        }
        return maxString
    }
}
