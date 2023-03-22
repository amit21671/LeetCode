var plusOne = function(digits) {
    let str='';
    for(let i of digits){
        str=str+i;
    }
    return String(BigInt(str)+BigInt(1)).split('');
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))  //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]