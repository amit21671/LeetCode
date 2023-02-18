var spiralOrder = function(matrix) {
    let res=[];
    //left to right
    let i=0;
    let j=0;
    while(j<matrix[i].length){
        res.push(matrix[i][j]);
        j++; 
    }
    //top to bottom
    i=0;
    j=matrix[i].length-1;
    while(i<matrix.length){
        res.push(matrix[i][j]);
        i++; 
    }
    // right to left
    i=matrix.length-1;
    j=matrix[i].length-1;
    while(j>=0){
        res.push(matrix[i][j]);
        j--; 
    }
    // bottom to top
    i=matrix.length-1;
    j=0;
    while(i>=0){
        res.push(matrix[i][j]);
        i--; 
    }
    return res;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); //[1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); //[1,2,3,4,8,12,11,10,9,5,6,7]
