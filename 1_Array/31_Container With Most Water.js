var maxArea = function(height) {
    let max_area=0;
    let i=0;
    let j=height.length-1;
    while(i<j){
        max_area=Math.max(max_area,((j-i)*Math.min(height[i],height[j])));
        if(height[i]<height[j]){
            i++;
        }else if(height[i]>height[j]){
            j--;
        }else{
            i++;
            j--;
        }
    }
    return max_area;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7])) //49