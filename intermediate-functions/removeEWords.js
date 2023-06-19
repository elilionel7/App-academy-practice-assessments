let removeEWords = function(sentence){
    const words = sentence.split(" ");
    const wordsWoutE = [];
    for(let word of words){
        if(word.indexOf('e') === -1 && word.indexOf('E') === -1){
            wordsWoutE.push(word)
        }
    }
    return wordsWoutE.join(" ")
}
console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
