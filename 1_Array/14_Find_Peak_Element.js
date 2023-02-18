//Linear Search O(n)
var findPeakElement = function(nums) {
    let idx=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[idx+1]){
            idx=i;
        }else{
            return idx;
        }
        idx++;
    } 
};

// Binary Search O(log n)
// var findPeakElement = function(nums) {
//     let left = 0, right = nums.length-1, mid;
//     while(left < right) {
//         mid = Math.floor((right+left)/2);
//         if(nums[mid] > nums[mid+1]) right = mid;
//         else left = mid+1;
//     }
//     return left;
// };
console.log(findPeakElement([1,2,3,1])) //2
console.log(findPeakElement([1,2,1,3,5,6,4])) //5
