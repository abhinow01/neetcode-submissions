class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        if(s.length !== t.length){
            return false 
        }
        for(let i=0;i<s.length;i++){
            if(map.has(s[i])){
                map.set(s[i] , map.get(s[i]) + 1)
            }else{
                map.set(s[i] , 1)
            }
        }
        for(let k=0 ; k<t.length ; k++){
            if(map.has(t[k])){
                if(map.get(t[k])<=0){
                    return false
                }else{
                    map.set(t[k] , map.get(t[k]) - 1)
                }
            }else{
                return false
            }
        }
        return true 
    }
}
