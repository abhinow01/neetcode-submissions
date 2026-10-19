class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0 ) return ''
        let sizes=[];
        let res=''
        for(let s of strs){
            sizes.push(s.length)
        }
        
        for(let sz of sizes){
            res += sz+ ','
        }
        res+='#';
        for(let s of strs){
            res+= s
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    if (!str) return [];
let hashindex = str.indexOf('#');
let sizePart = str.substring(0, hashindex);
let stringPart = str.substring(hashindex + 1);
  const res=[]
  let index = 0;
  let sizes = sizePart.split(',').filter(x => x !== '').map(Number);
   for(let i=0;i<sizes.length;i++){
    let size = sizes[i];
    res.push(stringPart.substring(index,index + size))
    index = index + size
   }
    return res    

    }
}
