class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map()
        if(s.length !== t.length){
            return false 
        }
        for (let k=0;k<s.length;k++){
            if(map.has(s[k]))
            {
                map.set(s[k] ,map.get(s[k]) + 1 )
            }else{
                map.set(s[k] , 1)
            }
        }
        for (let m=0;m<t.length;m++){
            if(map.has(t[m])){
            if(map.get(t[m]) <= 0){
                return false 
            } else {
                map.set(t[m] , map.get(t[m]) - 1)
            }
            }else {
                return false
            }
        }
    return true 
        
    }
}
