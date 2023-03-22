int maxSubArray(vector<int>& nums) {
     int sum = 0;
     int maxsum = INT_MIN;

     for(int i = 0; i<nums.size(); i++){
         sum = sum+nums[i];
         maxsum = max(maxsum,sum);
         if(sum<0){
             sum = 0;
         }
     } 
     return maxsum; 
    }

    maxSubArray(8,[-2,1,-3,4,-1,2,1,-5,4])