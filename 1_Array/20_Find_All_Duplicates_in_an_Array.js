var findDuplicates = function(nums) {
    let set=new Set();
    let res=[];
    let count=1;
    for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
        if(set.size==count){
            count++;
        }else{
            res.push(nums[i]);
        }
    }
    return res;
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));