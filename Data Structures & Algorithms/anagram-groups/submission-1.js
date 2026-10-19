class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen ={}

        for (const s of strs){
            const sortedS = s.split('').sort().join('')
            if(!seen[sortedS]){
                seen[sortedS] = []
            }
            seen[sortedS].push(s)
        }
return Object.values(seen)
            
        }
    }

