function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArr = [];
    let i = 1;
    while (i<arr.length){
        newArr.push(arr[i])
        i+=2
    }
    return newArr
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArr = [];
    let i = arr.length;
    while (i>=1){
        if (i%2===1){
            newArr.push(arr[i])
            i-=1
        }
    }
    return newArr

}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    // powers of 2, 1 2 4 8 16 32. ie current number *2
    let newArr = [];
    let   i = 1;
    while (i < arr.length){
        newArr.push(arr[i]);
        i *= 2
    }
    return newArr
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
