class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase().replace(/[^a-z0-9]/g,"");
        let pointer1 = 0;
        let pointer2 = str.length -1 ;
        while(pointer1<pointer2){
            if(str[pointer1] !== str[pointer2])
            return false 
            pointer1++;
            pointer2--;
        }
        return true 
    }
}
