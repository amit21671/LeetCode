function Table(table_no) {
    Print_1toN(10,table_no);
}
function Print_1toN(n,table_no) {
    if(n==1){
        console.log(n*table_no);
        return;
    }
    Print_1toN(n-1,table_no)*table_no; //Faith
    console.log(n*table_no); //Expectation
}
console.log(Table(7))