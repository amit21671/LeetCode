var largestNumber = function(nums) {
    nums.sort(function compare(a,b){
        let aplusb=a+""+b;
        let bplusa=b+""+a;
        return bplusa-aplusb;
    })
    if(nums[0]===0) return "0";
    return nums.join(''); 
 };
console.log(largestNumber([10,2])) //"210"
console.log(largestNumber([3,30,34,5,9])) //"9534330"