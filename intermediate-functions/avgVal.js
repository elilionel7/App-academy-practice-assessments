// your code here
let avgVal = function(arr) {
    if (arr.length === 0) {
        return null;
    }
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num;
    }

    return sum / arr.length;
};







console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
