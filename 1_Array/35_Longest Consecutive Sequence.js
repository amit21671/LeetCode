var longestConsecutive = function(arr) {
    if(arr.length===0) return 0;
    let map=new Map();
    for(let i of arr){
        map.set(i,1);
    }
    for(let i in arr){
        if(map.has(arr[i]-1)){
            map.set(arr[i],0);
        }
    }
    let max_length=1;
    for(let i of arr){
        if(map.get(i)===1){
            let temp_max=1;
            while(map.has(i+temp_max)){
                temp_max++;
            }
            max_length=Math.max(max_length,temp_max);
        }
    }
    return max_length;
};
console.log(longestConsecutive([100,4,200,1,3,2])) //4
//console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) //9


















// if(arr.length<=0) return 0
// let map = new Map()
// for(let elem of arr){
//     map.set(elem, 1);
// }
// for(let i in arr){              
//     if(map.has(arr[i]-1)) {     
//         map.set(arr[i], 0)
//     }
// }
// let maxLen=1
// for(let elem of arr) {
//     if(map.get(elem)==1) {                        
//         let seqCount = 1                           
//         while(map.has(elem + seqCount)) {           
//             seqCount+=1                              
//         }
//         maxLen = Math.max(maxLen, seqCount)         
//     }
// }
// return maxLen;