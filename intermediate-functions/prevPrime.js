// Your code here
let prevPrime = function(n){
    if(n <= 2){
        return null
    }
    n = n - 1;
    while(n >= 2){
        if(isPrime(n)){
            return n;
        }
        n--
    }
};


let isPrime = function(n){
    if (n < 2) {
        return false;
    }
    for(i = 2; i*i <= n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
};



console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
