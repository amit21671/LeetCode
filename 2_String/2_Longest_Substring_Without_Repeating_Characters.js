var lengthOfLongestSubstring = function (s) {
    let left_window=0;
    let max_length=0;
    let set=new Set();
    for (let i = 0; i < s.length; i++) {
        while(set.has(s[i])){
            set.delete(s[left_window]);
            left_window++;
        }
        set.add(s[i]);
        max_length=Math.max(max_length,i-left_window+1); //i-left_window+1=window_size
    }
    return max_length;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
































// let set = new Set();
// let left = 0;
// let maxSize = 0;

// if (s.length === 0) return 0;
// if (s.length === 1) return 1;

// for (let i = 0; i < s.length; i++) {

//     while (set.has(s[i])) {
//         set.delete(s[left])
//         left++;
//     }
//     set.add(s[i]);
//     maxSize = Math.max(maxSize, i - left + 1)
// }
// return maxSize;