var twoSum = function(nums, target) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        obj[nums[i]]=i;
    }
    for(let i=0;i<nums.length;i++){
        if(obj[target-nums[i]] && obj[target-nums[i]]!=i){
            return [i,obj[target-nums[i]]];
        }
    }
    
};
console.log(twoSum([2,7,11,15],9));

