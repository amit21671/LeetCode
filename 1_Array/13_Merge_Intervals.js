var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let res=[intervals[0]];
    for(let i=1;i<intervals.length;i++){
        let currStart=intervals[i][0];
        let currEnd=intervals[i][1];
        let resEnd=res[res.length-1][1];
        if(resEnd>=currStart){
            res[res.length-1][1]=Math.max(resEnd,currEnd);
        }else{
            res.push(intervals[i]);
        }
    }
    return res;
};
console.log(merge([[1,3],[2,6],[8,10],[7,15]]));   //[ [ 1, 6 ], [ 7, 15 ] ]
                //[[1, 3],[2,6],[7,15],[8,10]]
console.log(merge([[1,2],[3,6],[5,10],[15,18]]));   //[[1,2],[3,10],[15,18]]
console.log(merge([[1,4],[5,6]]));  //[[1,4],[5,6]]
                




























                // let res=[];
                // if(intervals.length==1){
                //     res.push(intervals[0]);
                // }
                // let i=0;
                // let j=i+1;
                // while(j<intervals.length){
                //     //merging ke liye
                //     if(intervals[i][1]>=intervals[j][0]){
                //         res.push([intervals[i][0],intervals[j][1]])
                //         i++;
                //         j++;
                //     }
                //     // non merging ke liye
                //     else{
                //         res.push([intervals[i][0],intervals[i][1]],[intervals[j][0],intervals[j][1]]) 
                //         i++;
                //         j++;
                //     }
                    
                // }
                // return res;