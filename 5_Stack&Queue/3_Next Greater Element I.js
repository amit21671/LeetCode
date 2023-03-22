var nextGreaterElement = function(nums1, nums2) {
    let output=[];
    for(let i in nums1){
        //console.log(i,nums1[i])
        for(let j in nums2){
            if(nums1[i]===nums2[j]){
                let val=-1;
                for(let k=j;k<nums2.length;k++){
                    if(nums2[j]<nums2[k]){
                        val=nums2[k];
                        break;
                    }
                }
                output.push(val)
            }
        }
    }
    return output;
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]))
                             //[1,2,4],[1,2,3,4]