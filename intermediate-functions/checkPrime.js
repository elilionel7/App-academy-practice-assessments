function isPrime(n){
    if (n <= 1) {
        return false;
      }

      for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
          return false;
        }
      }

      return true;
    }
function choosePrimes(arr){
    const newArr = [];

    for (let i of arr){
        if (isPrime(i)){
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
