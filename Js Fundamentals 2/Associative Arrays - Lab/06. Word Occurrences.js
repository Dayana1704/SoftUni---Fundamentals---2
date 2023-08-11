function occurences(input){

    let wordOccurences = new Map();


    for(let word of input){
        let counter = 0;
        if(!wordOccurences.has(word)){
            counter=1;
            wordOccurences.set(word, counter)
        }else{
            counter = wordOccurences.get(word)+1;;
             wordOccurences.set(word, counter); 
        }
    }

    let entries = Array.from(wordOccurences.entries());
    let sorted = entries.sort((a,b) => b[1] - a[1])

    for(let [word, count] of sorted){
       console.log(`${word} -> ${count} times`)
    }

}