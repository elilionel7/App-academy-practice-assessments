// Write a function mostVowels that takes in a
// sentence string and returns the word of the
// sentence that contains the most vowels.

// write a helper func that count vowels in word
// write main funtions that will first put sentence
// in array and vowels in each and return most frequent one
let mostVowels = function(sentences){
    let words = sentences.split(" ");
    let maxCount = 0;
    let id = 0;
    for(let i = 0; i < words.length; i++){
        let maxVowel = vowelCount(words[i])

        if(maxCount < maxVowel){
            maxCount = maxVowel;
            id = i
        }
    }
    return words[id]
};
let vowelCount = function(word){
    const vowels = "aeiou";
    let count = 0;
    for(let alp of word){
        if(vowels.includes(alp)){
            count++;
        }
    }
    return count
};
