let removeLastVowel = function(word){
    let lastVowelTracker = null;
    let str = '';
    for(let i = word.length-1; i >= 0; i--){
        if("aeiouAEIOU".includes(word[i])){
            lastVowelTracker = i;
            break
        }
    }
    for(let i = 0; i < word.length; i++){
        if(i !== lastVowelTracker){
            str += word[i]
        }
    };
    return str
}


// method 2
let removeLastVowel1 = function(word) {
    let vowels = 'aeiou';

    for(let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }

    return word;
};
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
