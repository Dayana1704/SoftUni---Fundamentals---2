function solve(text, word){
  
    for(let string of text){
      let isIncluded = text.includes(word);
    if(isIncluded){  
      text = text.replace(word, "*".repeat(word.length))
    }
  }
  
  console.log(text)
    
  }