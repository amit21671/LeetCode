var rotate = function(nums, k) {
    if (!nums.length) return [];
    k = k % nums.length;
    reverse(nums,0,nums.length-k-1);
    reverse(nums,nums.length-k,nums.length-1);
    reverse(nums,0,nums.length-1);
    return nums;
};
var reverse = function(arr, start, end) {
    let i=start;
    let j=end;
    while(i<j){
        let temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
        i++;
        j--;
    }
    return arr;
};
console.log(rotate([1,2,3,4,5,6,7],3));
console.log(rotate([-1,-100,3,99],2));