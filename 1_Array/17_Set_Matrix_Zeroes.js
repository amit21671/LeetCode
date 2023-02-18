var setZeroes = function(matrix) {
    const zeroRow = new Set();
    const zeroCol = new Set(); 
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                zeroRow.add(i);
                zeroCol.add(j);
            }
        }
    }
    for(let r of zeroRow) {
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[r][j] = 0;
        }
    }
    for(let c of zeroCol) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][c] = 0;
        }
    }
    return matrix;
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
                    //[[1,0,1],[0,0,0],[1,0,1]]
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
                    //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]