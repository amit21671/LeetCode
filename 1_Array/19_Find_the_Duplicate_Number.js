var findDuplicate = function(nums) {
    let set=new Set();
    let count=1;
    for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
        if(set.size==count){
            count++;
        }else{
            return nums[i];
        }
    }
};
console.log(findDuplicate([1,3,4,2,2])) //2
console.log(findDuplicate([3,1,3,4,2])) //3





























// var findDuplicate = function(nums) {
//     nums.sort((a,b) => a-b);
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]==nums[i+1]){
//             return nums[i];
//         }
//     }
// };