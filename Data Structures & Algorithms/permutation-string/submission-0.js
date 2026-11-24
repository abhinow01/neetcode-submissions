class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false ;

        
        let targetMap = new Map();
        let windowMap = new Map();
        let windowWidth;
        // 1. Build targetMap from s1.
        for(const characterS1 of s1){           
targetMap.set(characterS1 , (targetMap.get(characterS1) || 0) + 1)
            
        }
    // 2. Set windowWidth = s1.length.
            windowWidth = s1.length
    // 3. Build the first window in s2.
    let left = 0;
    let right = windowWidth;
        for(let i=0;i<right;i++){           
windowMap.set(s2[i] , (windowMap.get(s2[i]) || 0) + 1)
            
        }
        
    // 4. Compare windowMap with targetMap.
const areMapsEqual = (map1, map2)=>{
    if(map1.size !== map2.size) return false;
    for (let [key , value ] of map1){
        if(map2.get(key) !== value) return false
    }
    return true;
}
   if(areMapsEqual(targetMap , windowMap)) return true;
   // 5. Slide the window:
    //    Remove s2[left].
    //    Add s2[right].
    //    Compare frequencies again.
   while(right<s2.length){
    const outgoing = s2[left];
    if(windowMap.get(outgoing) === 1){
        windowMap.delete(outgoing)
    }else{
        windowMap.set(outgoing , windowMap.get(outgoing) - 1)
    }
    const incoming = s2[right];
    windowMap.set(
                incoming,
                (windowMap.get(incoming) || 0) + 1
            );
    left++;
    right++;
    if(areMapsEqual(targetMap , windowMap)) 
    {return true}
   }
    return false
        
    }
}
