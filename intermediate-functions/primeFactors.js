// Write a function primeFactors that accepts a number
// as an argument. The function should return an array
// containing all of the prime numbers that can divide
// the given number.

let primeFactors = function(n){
    const arr = [];
    for(let i = 2; i <= n; i++){
        if(isPrime(i) && (n%i===0)){
            arr.push(i)
        }

    }
   return arr
}
let isPrime = function(n){
    if(n<=1){
        return false
    }
    for(let i = 2; i * i <= n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
};



console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
