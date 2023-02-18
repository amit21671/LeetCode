var generate = function(numRows) {
    let res=[];
    for(let i=0;i<numRows;i++){
     let temp=new Array(i);
     //console.log(temp);
     for(let j=0;j<=i;j++){
          //console.log(temp[j])
          if(j==0 || j==i){
               temp[j]=1;
           }else{
               temp[j]=res[i-1][j-1]+res[i-1][j]
          }      
     }   
     res.push(temp);  
    }
     return res;
};
console.log(generate(10));