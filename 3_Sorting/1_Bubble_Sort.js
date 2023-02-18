var sortArray = function(nums) {
    for(let i=0;i<nums.length;i++){
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i]>nums[j]){
                nums[i] = nums[i]+nums[j];
                nums[j]=nums[i]-nums[j];
                nums[i]=nums[i]-nums[j];
            }
        }
    }
    return nums;
};
console.log(sortArray([5,1,-1,-2,0,0]))
// 5 1
// 5 1
// 5 2
// 5 0
// 5 0
// 1 1
// 1 2
// 1 0
// 1 0
// 1 2
// 1 0
// 1 0
// 2 0
// 2 0
// 0 0