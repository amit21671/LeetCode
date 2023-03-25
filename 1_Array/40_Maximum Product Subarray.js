var maxProduct = function(nums) {
    if(!nums.length) return 0;
    if(nums.length===1) return nums[0];
    let ans=nums[0];
    let min_history=nums[0];
    let max_history=nums[0];
    for(let i=1;i<nums.length;i++){
        let temp_min=min_history*nums[i];
        let temp_max=max_history*nums[i]
        min_history=Math.min(nums[i],temp_min,temp_max);
        max_history=Math.max(nums[i],temp_min,temp_max);
        ans=Math.max(ans,max_history)
    }
    return ans;
};

console.log(maxProduct([2,3,-2,4]));//6
console.log(maxProduct([-2,0,-1]));//0

console.log(maxProduct([-2,3,-4]));//24
console.log(maxProduct([2,-5,-2,-4,3]));//24
