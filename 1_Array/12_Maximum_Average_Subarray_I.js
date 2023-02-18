// Sliding Window Problem 2 types -> fixed size and variable size window
var findMaxAverage = function(nums, k) {
   let window_sum=0;
  for(let i=0;i<k;i++){
    window_sum=window_sum+nums[i];
  }
  let max=window_sum;
  for(let i=1;i<=nums.length-k;i++){
    window_sum=window_sum-nums[i-1]+nums[i+k-1];
    if(max<window_sum){
        max=window_sum;
    }
  }
  return max/k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4))
                       