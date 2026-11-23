
class Solution {
    characterReplacement(s, k) {
        let map = new Map();

        let left = 0;
        let right = 0;

        let largestString = 0;
        let maxFrequency = 0;

        while (right < s.length) {

            map.set(
                s[right],
                (map.get(s[right]) || 0) + 1
            );

            maxFrequency = Math.max(
                maxFrequency,
                map.get(s[right])
            );

            let windowLength = right - left + 1;

            if (windowLength - maxFrequency > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            largestString = Math.max(
                largestString,
                right - left + 1
            );

            right++;
        }

        return largestString;
    }
}
