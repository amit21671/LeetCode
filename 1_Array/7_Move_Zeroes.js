var moveZeroes = function(nums) {
    for(let i=nums.length;i>=0;i--){
        if(nums[i]==0){
            nums.splice(i,1);   
            nums.push(0);
        }
    }
    return nums;   
};
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))



























// var moveZeroes = function(nums) {
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]==0){
//             nums.splice(i,1);   
//             nums.push(0);
//         }
//     }
//     return nums   
// };