function Print_1toN(n) {
    if(n==1){
        console.log(1);
        return;
    }
    Print_1toN(n-1); //Faith
    console.log(n); //Expectation
}
console.log(Print_1toN(7))