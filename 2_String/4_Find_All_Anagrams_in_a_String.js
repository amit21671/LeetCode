var findAnagrams = function(s, p) {
    let res=[];
    let map=new Map();
    for(let i in p){
        if(map.has(p[i])){
            map.set(p[i],map.get(p[i])+1);
        }else{
            map.set(p[i],1);
        }
    }
    let i=0;
    let j=0;
    let count=map.size;
    while(j<s.length){
        if(map.has(s[j])){
            map.set(s[j],map.get(s[j])-1);
            if(map.get(s[j])==0) count--;
        }
        if(j-i+1<p.length){
            j++;
        }else if(j-i+1==p.length){
            if(map.has(s[i])){
                map.set(s[i],map.get(s[i])+1);
                if(count==0){
                    res.push(i);
                }
                if(map.get(s[i])==1) count++;  
            }
            i++;
            j++;
        }
    }
    return res;
};
console.log(findAnagrams("abaabaa","abaa")); //[ 0, 2, 3 ]
// console.log(findAnagrams("cbaebabacd","abc"));
// console.log(findAnagrams("abab","ab"));
























































// var findAnagrams = function(s, p) {
//     let map = new Map()
//     let result = []
//     //Store the sub string characters in map (map)
//     for(let c of p){
//         if(map.get(c)){
//             map.set(c, map.get(c)+1) // increasing the count 
//         }else{
//             map.set(c, 1)
//         }
//     }
//     //console.log(map);
//     let count = map.size //Count is needed so that we do not have to traverse map always
//     let i=0
//     let j=0
//     //two pointers i and j. Initially we will increment j and check for character match with the map.
//     while(j<s.length){
//         let ch = s[j]        
//         if(map.has(ch)){
//             //when current character is found in map, we decrement the value till its zero
//             map.set(ch, map.get(ch)-1) // decreasing the count
//             //When zero, we decrement the count.
//             if(map.get(ch)===0) count--
//         }
        
//         //here we are checking if the sliding window size is less than that of the substring 'p'
//         if(j-i+1<p.length) j++
//         //if sliding window length is equal to length of 'p', next set of calculations
//         else if(j-i+1===p.length){
//             //when count is zero, we push the initial index value to result
//             if(count===0){
//                 result.push(i)
//             }
//             // we need to move the i pointer, along with that we need to add the count of the current i character to the {key, value} in the map. 
//             //for j pointer it is taken care of in the while loop at the beginning
//             if(map.has(s[i])){
//                 map.set(s[i], map.get(s[i])+1)
//                 if(map.get(s[i])===1){
//                     count++
//                 }
//             }
//             i++
//             j++
//         }
//     }
//     return result
// };