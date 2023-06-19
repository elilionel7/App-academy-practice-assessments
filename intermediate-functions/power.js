function powerOfTwo(arr){
    // return array of indeces that are powers of 2
    let newArr = [];
    let i=1;
    while (i < arr.length){

        let num = arr[i];
        newArr.push(num);
        i *= 2;
    }
    return newArr
}
let arr = [1, 2, 3, 4, 45, 6, 5, 2, 1];

console.log(powerOfTwo(arr));
