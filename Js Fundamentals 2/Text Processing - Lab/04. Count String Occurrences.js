function solve(text, word){
    let counter = 0;
    text = text.split(" ");
    for(let string of text){
        if(string == word){
        counter++;

        }
    }
console.log(counter)
}