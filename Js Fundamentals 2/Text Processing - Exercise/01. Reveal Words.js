function solve(words, sentence){

    words = words.split(", ");
    
    for(let word of words){
        let template = "*".repeat(word.length);
        if(word.length == template.length){
            sentence = sentence.replace(template, word)
        }
    }
    console.log(sentence)
    }