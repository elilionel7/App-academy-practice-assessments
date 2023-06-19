// Write a function firstVowel(str) that takes in a string
//  and returns the first vowel that appears sequentially
//  in the string. If the string does not contain a vowel,
//  return null.


function firstVowel(str) {
    //1st- check element in word is a vowel
    const vowels = "aeiou";
    //
    for(let i of str) {
        if(vowels.includes(i)) {
            return i;
        }
    }
    return null;
    //2.-if true break
    //3.- else continue until loop ends and return null

}

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
