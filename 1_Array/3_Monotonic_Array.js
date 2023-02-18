var isMonotonic = function(nums) {
    let set=new Set();
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
                set.add("increasing");
        }else if(nums[i]>nums[i+1]){
                set.add("decreasing");
        }else{
            continue;
        }
    }
    if(set.size>1){
        return false;
    }else{
        return true;
    }
};
console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));