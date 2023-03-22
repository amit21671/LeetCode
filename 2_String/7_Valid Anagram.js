var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        console.log(freq[s.charCodeAt(i) - 'a'.charCodeAt(0)],freq[t.charCodeAt(i) - 'a'.charCodeAt(0)])
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    //console.log(freq);
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    return true;
};
// console.log(isAnagram("anagram","nagaram")); //true
// console.log(isAnagram("rat","car")); //false
console.log(isAnagram("anagtam","nbgbram")); //false















// var isAnagram = function(s, t) {
//     if(s.length != t.length) return false;
//     let bool;
//     let map=new Map();
//     for(let i in s){
//         if(map.has(s[i])){
//             map.set(s[i],map.get(s[i])+1);
//         }else{
//             map.set(s[i],1);
//         }
//     }
//     for(let j in t){
//         if(map.has(t[j])){
//             map.set(t[j],map.get(t[j])-1);
//         }else{
//             return false;
//         }
//     }
//     console.log(map)
//     map.forEach((value)=>{
//         console.log(value)
//         if(value!=0){
//             bool= false;
//         }else{
//             bool= true;
//         }
//     });
//     return bool;
// };
