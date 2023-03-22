var titleToNumber = function(columnTitle) {
    let ans=0;
    let caps=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(let i=0;i<columnTitle.length;i++){
        for(let j=0;j<caps.length;j++){
            if(columnTitle[i]==caps[j]){
                ans=(ans*26)+(j+1);
            }
        }
    }
    return ans;
};
console.log(titleToNumber("A")) //1
console.log(titleToNumber("AB")) //28
console.log(titleToNumber("ZY")) //701