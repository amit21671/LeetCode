var isValid = function(s) {
  let arr=[];
  let obj={
    "(":")",
    "{":"}",
    "[":"]"
  }
  for(let i=0;i<s.length;i++){
    if(obj[s[i]]){
        arr.push(obj[s[i]])
    }else if(s[i]!=arr.pop()){
        return false;
    }
  }
  return arr.length==0;
};
console.log(isValid("()"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("(]"));//false
console.log(isValid("{[]}")); //true