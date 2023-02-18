/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res=new Array(nums.length).fill(0);
    let i=0;
    let j=nums.length-1;
    let last_index = nums.length-1;
    while(j>=i){
        if(nums[i]*nums[i]<nums[j]*nums[j]){
            res[last_index]=nums[j]*nums[j];
            j--;                
        }else{
            res[last_index]=nums[i]*nums[i];               
            i++;
        }
        last_index--;
        
    }
   return res; 

};