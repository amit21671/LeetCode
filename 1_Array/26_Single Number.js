var singleNumber = function(nums) {
    let map=new Map();
    let ans;
    for(let i in nums){
        if(map.get(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }
     map.forEach (function(keycount, key) {
      if(keycount===1) {
        ans= key;
      }
    })
    return ans;
    
};
console.log(singleNumber([4,1,2,1,2])) //4



// let myset=new Set();
//     let count=0;
//     for(let i in nums){
//         if(count!=myset.size){
//             return nums[i];
//         }
//         myset.add(nums[i]);
//         count++;
//     }