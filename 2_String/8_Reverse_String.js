var reverseString = function(s) {
    let i=0;
    let j=s.length-1;
    let temp;
    while(i<j){
        temp=s[j];
        s[j]=s[i];
        s[i]=temp;
        i++;
        j--;
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));  //["o","l","l","e","h"]
//console.log(reverseString(["H","a","n","n","a","h"]));  //["h","a","n","n","a","H"]