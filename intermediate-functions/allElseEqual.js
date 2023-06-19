// Write a function allElseEqual that takes in an array of numbers.
//  The function should return the element of the array that is
//  equal to half of the sum of all elements of the array. If
//  there is no such element, the method should return null.
function allElseEqual(arr) {
    // your code here
    const halfOfSum = sumArr(arr) / 2.0;
    for(let ele of arr){
        if( ele === halfOfSum){
            return halfOfSum
        }
    }
    return null
}

let sumArr = function(arr){
    let sum = 0;
    for(let ele of arr){
        sum += ele;
    }
    return sum
}
console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
