var isSubsequence = function(s, t) {
  let map=new Map();
  for(i in s){
    //console.log(i,s[i])
    if(map.has(s[i])){
        map.set(s[i],map.get(s[i])+1)
    }else{
        map.set(s[i],1)
    }
  }  
  let i=0;
  let j=0;
  let count=map.size;
  while(i<t.length){
        if(map.has(t[j])){
            map.set(t[j],map.get(t[j])-1);
            if(map.get(t[j])==0) count--;
        }
        if(j-i+1<p.length){
            j++;
        }else if(j-i+1==p.length){
            if(map.has(t[i])){
                map.set(t[i],map.get(t[i])+1);
                if(count==0){
                    res.push(i);
                }
                if(map.get(t[i])==1) count++;  
            }
            i++;
            j++;
        }
  }
};
// console.log(isSubsequence("aabc","adahbgdc"))
// //console.log(isSubsequence("axc","ahbgdc"))