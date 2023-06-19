function minValue(nums){
    if(nums.length === 0) {
        return null;
    }
    let min = Infinity;
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        min = Math.min(min, num)
    }
    return min;
}


console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
