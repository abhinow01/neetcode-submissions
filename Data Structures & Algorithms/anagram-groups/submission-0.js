class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const primaryArray = [];
        let seen = new Set();

        for (let i = 0; i < strs.length; i++) {
            if (seen.has(i)) continue; 

            const group = [strs[i]]; 
            seen.add(i); 

            for (let j = i + 1; j <strs.length; j++) {
                
                if (!seen.has(j) && strs[i].length === strs[j].length && 
                    strs[i].split("").sort().join() === strs[j].split("").sort().join()) {
                    group.push(strs[j]); 
                    seen.add(j); 
            }

           
        }
         primaryArray.push(group); 
        
    }
    return primaryArray;
}
}