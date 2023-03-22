var firstUniqChar = function(s) {
  let letter; 
  let map=new Map();
  for(let i in s){
    if(map.has(s[i])){
        map.set(s[i],map.get(s[i])+1);
    }else{
        map.set(s[i],1);
    }
  }  
  for(let j in s){
    if(map.get(s[j])===1) return j;
  }
  return -1;
};
console.log(firstUniqChar("leetcode")); //0
console.log(firstUniqChar("loveleetcode")); //2
console.log(firstUniqChar("aabb")); //-1
