var majorityElement = function(nums) {
    let ans;
    let map=new Map();
    for(let i in nums){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    map.forEach((keycount,key)=>{
        //console.log(key,keycount)
        if(keycount>=nums.length/2){
            ans=key;
        }
    })
    return ans;
};
console.log(majorityElement([2,2,1,1,1,2,2]))