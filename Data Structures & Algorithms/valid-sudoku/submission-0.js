class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length:9} , ()=>new Set());
        const columns = Array.from({length:9} , ()=>new Set());
        const boxes = Array.from({length:9} , ()=>new Set());

        for (let i=0;i<board.length ;i++){
            for(let j=0;j<board[i].length;j++){
                
                let boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
                let val = board[i][j]
                if(val === '.')
                continue;
                if(rows[i].has(val)){
                    return false 
                }
                if(columns[j].has(val)){
                    return false 
                }
                if (boxes[boxIndex].has(val))
                {
                return false 
                }
                
                // add missing value 
                rows[i].add(val);
                columns[j].add(val);
                boxes[boxIndex].add(val);
            }
        }
        return true 
    }
}
