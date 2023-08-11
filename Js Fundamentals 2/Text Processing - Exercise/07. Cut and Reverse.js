function solve(string){
    let secondWord = "";
let firstWord = "";
for(let i = string.length/2-1; i>=0; i--){
    firstWord+=string[i];
}
    for(let i = string.length-1; i>=string.length/2; i--){
       secondWord+=string[i];
    }
console.log(firstWord);
console.log(secondWord)
}