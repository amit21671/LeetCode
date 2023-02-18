var transpose = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let res=Array.from({length:n},() => new Array(m).fill(0))
    console.log(res)
    for(let i=0;i<m;i++){        
        for(let j=0;j<n;j++){
            res[j][i]=matrix[i][j];
        }
        
    }
    return res;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
                    //[[1,4,7],[2,5,8],[3,6,9]]