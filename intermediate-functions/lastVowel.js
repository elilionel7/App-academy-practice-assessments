// Write a function lastVowel(str) that takes in a string and returns
// the last vowel that appears sequentially in the string.
// Note that the string may contain capitalization.

// Hint: You may find the String.toLowerCase() or String.toUpperCase() methods useful.
let lastVowel = function(str) {

    const vowels = "aeiouAEIOU";

    for(let e = str.length-1; e >= 0; e -= 1) {
        let lastChar = str[e];
        if(vowels.includes(lastChar)){
            return lastChar;
        }

    }
    return null;
};





console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
