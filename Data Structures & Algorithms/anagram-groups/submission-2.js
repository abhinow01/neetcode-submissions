class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen = {};
        for(const s of strs){
            const sortedString = s.split('').sort().join('');
            if(!seen[sortedString]){
                seen[sortedString] = []
            }
            seen[sortedString].push(s)
        }
        return Object.values(seen)

    }
}
