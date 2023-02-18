var isPowerOfTwo = function(n) {
  if (n==1) return true
  if (n <= 0) return false
  if (n%2 != 0) return false
  else return isPowerOfTwo(n/2)
};

console.log(isPowerOfTwo(128))























// var isPowerOfTwo = function(n) {
//   return PowerofTwo(2,n); 
// };
// function PowerofTwo(base,n) {
// if(n==1){
//   return base*n;
// }
// return base*PowerofTwo(base,n-1);
// }
// console.log(isPowerOfTwo(16))