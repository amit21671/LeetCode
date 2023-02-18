var searchRange = function(nums, target) {
    return FirstIndexandLastIndex(nums, target,0,[]);
};

function FirstIndexandLastIndex(nums, target,start,res){
    if(nums[start]==target) res.push(start);
    if(start>nums.length && res.length==0) res.push(-1,-1); 
    if(start>nums.length) return;
    FirstIndexandLastIndex(nums,target,start+1,res);
    return [res[0],res[res.length-1]];
}
console.log(searchRange([5,7,7,8,8,10],8)) //[3,4]
console.log(searchRange([5,7,7,8,8,10],6)) //[-1,-1]
console.log(searchRange([],0)) //[-1,-1]
console.log(searchRange([5],5)) //[0,0]
console.log(searchRange([3,3,3],3)) //[0,2]

//Iterative Method
// var searchRange = function(nums, target) {
//     let res=[];
//     let i=0;
//     let j=nums.length-1;
//     while(i<=nums.length-1 ){
//         if (nums[i]==target) {
//             res.push(i);
//             break;
//         } 
//         i++;
//     }
//     while(j>=0 ){
//         if (nums[j]==target) {
//             res.push(j);
//             break;
//         }
//         j--;
//     }
//     if(res.length==0){
//         return [-1,-1];
//     }
//     return res;
// };


// Recursive
// var searchRange = function(nums, target) {
//     let res=[];
//     return FirstandLastIndex(nums,target,0,nums.length,res);
// };
// function FirstandLastIndex(array,target,left,right,ans) {
//     if(left>right){
//         return [-1,-1];
//     }
//     if (array[left]==target) {
//        ans.push(left);   
//     }
  
//     if (array[right]==target) {
//         ans.push(right);
//     }
//         //console.log("Before Call",left,right,ans)
//         FirstandLastIndex(array,target,left+1,right-1,ans)
//         //console.log("After Call",left,right,ans)

//     if(ans.length==0){
//         return [-1,-1];
//     }
//     return [ans[0], ans[ans.length - 1]];
// }
