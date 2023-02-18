var longestPalindrome = function (s) {
    let arr = []
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            ans = s.substring(i, j);
            if (isPalindrome(ans)) {
                arr.push(ans);
            }
        }
    }
    var max_str = arr[0].length;
    var res = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var maxi = arr[i].length;
        if (maxi > max_str) {
            res = arr[i];
            max_str = maxi;
        }
    }
    return res;
};

function isPalindrome(string) {
    let leftPointer = 0
    let rightPointer = string.length - 1

    while (leftPointer < rightPointer) {
        if (string[leftPointer] !== string[rightPointer]) return false;
        leftPointer++;
        rightPointer--;
    }
    return true
}

// console.log(longestPalindrome("babad")); //bab
// console.log(longestPalindrome("cbbd")); //bb