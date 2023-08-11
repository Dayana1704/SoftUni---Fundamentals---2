function solve(input){
    let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;
   
    
    let validNames = [];
    let match = pattern.exec(input)
    
   
    while(match!== null){
        validNames.push(match)
   match = pattern.exec(input);
    }
    console.log(validNames.join(" "));  
   }