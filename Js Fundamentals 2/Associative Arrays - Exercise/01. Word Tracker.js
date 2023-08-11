function solve(input){
    let words = input.shift().split(" ");
    let occurences = {};
  
    
    for(let word of words){
        occurences[word] = 0;
    }
    for(let word of input){
        if(occurences.hasOwnProperty(word)){
            occurences[word]++;
        }
    }
let  sorted = Object.entries(occurences).sort((a,b) => b[1] - a[1]);



for(let [word,count] of sorted){
    console.log(`${word} - ${count}`)
}
}