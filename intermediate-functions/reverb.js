// Write a function reverb that accepts a word as an argument.
//  The function should return a new word where all letters that
//  come after the last vowel (including the vowel itself) are
//  repeated at the end of the word. If the value passed in is
//  not a string, say someone passes in a number as an argument,
//  then return null.

// method one uses slice
let reverb = function(word) {
    if (typeof word !== 'string') {
      return null;
    }
    let vowels = 'aeiouAEIOU';
    for (let i = word.length - 1; i >= 0 ;i--) {
      if (vowels.includes(word[i])) {
        return word + word.slice(i);
      }
    }
    return word;
  }

  //method 2 uses two

  // Your code here
let reverb1 = function(str){
    // iterate from the back for first vowel
    // if we see a vowel we can iterate back to
    //add to our newStr

    if((typeof str)=== "number"){
        return null
    }

    let newStr = str;
    let i = str.length;
    let vowels = "aeiouAEIOU"

    while(i>=0){
        let alp = str[i];

        if(vowels.includes(alp)){
            break
        }else if(i === 0){
            return str
        }
        i--
    }

    while(i<str.length){
        alp = str[i];
        newStr += alp;
        i++
    }
    return newStr
};


console.log(reverb('rnnng')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
