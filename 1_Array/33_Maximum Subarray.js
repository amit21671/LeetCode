var maxSubArray = function(nums) {
    if(!nums.length) return 0;
    if(nums.length===1) return nums[0];
    let ans=nums[0];
    let history=nums[0];
    for(let i=1;i<nums.length;i++){
        history=Math.max(nums[i],history+nums[i]);
        ans=Math.max(history,ans)
    }
    return ans;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6
console.log(maxSubArray([5,4,-1,7,8])); //23
console.log(maxSubArray([-2,-1])); //-1















// if (nums.length ==1) return nums[0];
// let currMax = nums[0];
// let history = nums[0];
// for (i=1; i<nums.length; i++){
//     history = Math.max(history+nums[i], nums[i]);
//     currMax = Math.max(history, currMax)
// }
// return currMax;





// var maxSubArray = function(nums) {
//     let max=nums[0];
//     let res=[];
//     let i=0;
//     while(i<nums.length){
//         let j=i;
//         while (j<nums.length) {
//             let sub=[];
//             let k=i;
//             while(k<=j){
//                 sub.push(nums[k]);   
//                 k++;
//             }
//             res.push(sub);
//             j++;
//         }
//         i++;
//     }
//     for(i of res){
//         max=Math.max(arr_sum(i),max);
//     }
//     return max;
// };

// var arr_sum=function (arr) {
//     let sum=0;
//     for(i of arr){
//         sum=sum+i;
//     }
//     return sum;
// }
