var productExceptSelf = function (nums){
    let res=[];
    let left_arr=[];
    let right_arr=[];
    let product=1;
    for(let i=0;i<nums.length;i++){
      right_arr[i]=product;
      product=product*nums[i]
    }
    product=1;
    for(i=nums.length-1;i>=0;i--){
      left_arr[i]=product;
      product=product*nums[i]
    }
    for(i=0;i<nums.length;i++){
      res[i]=left_arr[i]*right_arr[i];
    }
    return res;
  };
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
//console.log(productExceptSelf([-1,1,0,-3,3]));


































//     const res = [];
//     let product = 1;
  
//     for (let i = 0; i < nums.length; i++) {
//       res.push(product);
//       product *= nums[i];
//     }
  
//     product = 1;
  
//     for (let j = nums.length - 1; j >= 0; j--) {
//       res[j] *= product;
//       product *= nums[j];
//     }
  
//     return res;