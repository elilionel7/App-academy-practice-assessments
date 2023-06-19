function helperFunc(n){
    // base case 0 and 1 are not prime
    //so we can return false immediately
    if(n <= 1){
        return false;
    }

    let i = 2;

    while (i < n){
        if (n % i === 0){
            return false;
        }
        i += 1;
    }
    return true
}

function laligatSum(n){
    let sum = 0;
    let i = 2;

    while (i <= n){
        if (helperFunc(i)){
            sum += i;
        }
        i++
    }
    return sum

}
console.log(laligaSum(7))
