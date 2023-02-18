function PrintNto1(n) {
    if(n==1){
        console.log(1);
        return;
    }
    console.log(n)
    PrintNto1(n-1);
}
console.log(PrintNto1(7))