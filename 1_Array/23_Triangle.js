var minimumTotal = function(triangle) {
    let sum=0;
    for(let i=triangle.length-1;i>0;i--){
        let j=0;
        let k=triangle[i].length-1;
        let min;
        while(j<k){
            if(triangle[i][j]<triangle[i][k]){
                min=triangle[i][j];
                k--;
            }else if(triangle[i][j]>triangle[i][k]){
                min=triangle[i][k];
                j++;
            }else{
                min=triangle[i][k];
                j++;
                k--;
            }   
        }
        
    }
    return sum;
};
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); //11
//console.log(minimumTotal([[-1],[2,3],[1,-1,-3]])); //-1