var missingNumber = function(nums) {
    let sn=(nums.length*(nums.length+1))/2;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
    return sn-sum;
};