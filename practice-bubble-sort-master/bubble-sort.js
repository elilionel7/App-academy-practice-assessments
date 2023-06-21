
function bubbleSort(arr) {

    // Iterate through the array
    for(let i = 0; i < arr.length; i++){

      for(let j = 0; j < arr.length - 1 - i; j++){
        let curVal = arr[j];
        let neighbor = arr[j+1];

        if( curVal > neighbor){
          arr[j] = neighbor;
          arr[j+1] = curVal;
      // If the current value is greater than its neighbor to the right
        // Swap those values

        // console.log
        console.log(arr.join(","));
        }

    // If you get to the end of the array and no swaps have occurred, return
      }


    // Otherwise, repeat from the beginning

    }
    return arr

}

module.exports = bubbleSort;
