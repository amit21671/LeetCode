var evalRPN = function(tokens) {
    let arr=[];
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]=="+"){
            let second=+arr.pop();
            let first=+arr.pop();
            arr.push(first+second);
        }else if(tokens[i]=="-"){
            let second=+arr.pop();
            let first=+arr.pop();
            arr.push(first-second);
        }else if(tokens[i]=="*"){
            let second=+arr.pop();
            let first=+arr.pop();
            arr.push(first*second);
        }else if(tokens[i]=="/"){
            let second=+arr.pop();
            let first=+arr.pop();
            arr.push(Math.trunc(first/second));
        }else {
            arr.push(tokens[i]);
        }
    }
    return arr[0];
};