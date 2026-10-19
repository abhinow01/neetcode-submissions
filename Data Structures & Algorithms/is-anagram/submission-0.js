class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //method 1
        // if(s.length !== t.length){
        //     return false 
        // }
        // let sortedS = s.split("").sort().join();
        // let sortedT = t.split("").sort().join();
        // return sortedS == sortedT

        //method 2 
        if(s.length !== t.length){
            return false 
        }
        let count = new Array(26).fill(0);
        for(let i =0;i<s.length ; i++){
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return count.every(val=> val===0)

    }
}
