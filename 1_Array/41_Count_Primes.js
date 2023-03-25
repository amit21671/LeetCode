var countPrimes = function(n) {
    let count=0;
    for(let i=2;i<n;i++){
        let bool=true;
        for(let j=2;j*j<=i;j++){
            if(i%j==0){
                bool=false;
                break;
            }
        }
        if(bool){
            count++;
        }
    }
    return count;
};
// var Isprime= function(x){
//     for(let j=2;j*j<=x;j++){
//         if(x%j==0){
//             return false;
//         }
//     }
//     return true;
// }
//console.log(Isprime(4))
console.log(countPrimes(10));
console.log(countPrimes(5000000));