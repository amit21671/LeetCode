var threeSum = function(nums) {
    if(nums.length===0){
        return [];
    }
    nums.sort((a,b) => a-b);
    let res=[];
    for(i=0;i<nums.length-2;i++){
        if(i>0 && nums[i]==nums[i-1]) continue;
            let left=i+1;
            let right=nums.length-1;
            while (left<right) {
                let sum=nums[i]+nums[left]+nums[right];
                if(sum<0){
                    left++;
                }else if(sum>0){
                    right--;
                }else{
                    res.push([nums[left],nums[right],nums[i]]);
                    while(nums[left]==nums[left+1]){left++};
                    while(nums[right]==nums[right+1]){right--};
                    left++;
                    right--;
                }
            }
            
        }
        return res;
};
