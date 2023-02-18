var findKDistantIndices = function(nums, key, k) {
    const res = [];
    let j = 0;
    let i = 0;
    while(i < nums.length) {
        if(nums[j] === key && Math.abs(i-j) <= k ) {
            res.push(i);
            i++;
        }
		if(nums[j] !== key || i - j > k){
            j++;
        }
        if(j - i > k) {
            i++;
        }
    }
    return res
};
console.log(findKDistantIndices([2,4,9,1,3,9,5],9,1));//[ 1, 2, 3, 4, 5, 6 ]
console.log(findKDistantIndices([2,2,2,2,2],2,2));//[0,1,2,3,4]
















// var findKDistantIndices = function(nums, key, k) {
//     let res=[];
//     let set=new Set();
//     for(let i=0;i<nums.length;i++){
//         if (nums[i]==key) {
//             if(i-k>=0){
//                 set.add(i-k);
//             }
//                 set.add(i);
//             if(i+k<=nums.length-1){
//                 set.add(i+k);
//             }    
//         }
//     }
//     for(let i of set){
//         res.push(i)
//     }
//     return res.sort();
// }