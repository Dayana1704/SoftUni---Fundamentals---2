function solve(word, text){
    text = text.split(" ");
    let isFound = false;
    
   for(let string of text){
       string = string.toLowerCase();
       if(string == word){
           isFound = true;
           
       }
   }
   if(isFound){
    console.log(word);
   }else{
       console.log(`${word} not found!`)
   }
   

}