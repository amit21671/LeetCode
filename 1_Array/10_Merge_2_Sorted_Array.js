var merge = function(nums1, m, nums2, n) {
    let i=m-1; //0
    let j=n-1;//0
    let k=m+n-1;
    while(i>=0 && j>=0){
        if(nums1[i]<nums2[j]){
            nums1[k--]=nums2[j--];
        }else{
            nums1[k--]=nums1[i--];
        }
    }
    while(i>=0){
        nums1[k--]=nums1[i--];
    }
    while(j>=0){
        nums1[k--]=nums2[j--];
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
console.log(merge([2,0],1,[1],1));
// [ 2, 2 ]
// [ 1, 2 ]
















// let first=m-1; //0
// let second=n-1;//0
// if(m==0){
//     nums1[0]=nums2[0];
// }
// for(let i=nums1.length-1;i>0 ;i--){
//     if(nums1[first]<nums2[second]){
//         nums1[i]=nums2[second];
//         second--;
//     }else if(nums1[first]>nums2[second]){
//         nums1[i]=nums1[first];
//         first--;
//     }else if(nums1[first]=nums2[second]){
//         nums1[i]=nums1[first];
//         nums1[i-1]=nums2[second];
//         first--;
//         second--;
//         i--;
//     }else{
//         nums1[i]=nums2[second];
//     }
// }
// return nums1;