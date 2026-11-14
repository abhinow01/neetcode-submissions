class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        
        let area= -Infinity ;
        let left = 0;
        let right =heights.length - 1;
        
        while(left<right){
            let currentArea = (right -                  left)*Math.min(heights[left],heights[right]);
            if(area<currentArea){
                area = currentArea;
            }
            if( heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
         
         
        }
        
        return area;
    }
}
