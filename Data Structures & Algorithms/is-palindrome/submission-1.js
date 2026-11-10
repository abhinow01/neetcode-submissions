class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let pointer1 = 0;
        let pointer2 = s.length -1 ;
        while(pointer1<pointer2){
            while(pointer1<pointer2 && !this.isAlphaNumeric(s[pointer1])){
                pointer1++
            }
            while(pointer1<pointer2 && !this.isAlphaNumeric(s[pointer2])){
                pointer2--
            }
            if(s[pointer1].toLowerCase() !== s[pointer2].toLowerCase()){
            return false 
            }
            pointer1++;
            pointer2--;
        }
        return true 
    }
    isAlphaNumeric(char){
        const code = char.charCodeAt(0);
        return (
            (code <=57 && code>=48) ||
            (code>=65 && code<=90) || 
            (code>=97 && code<=122)
        )
    }
}


