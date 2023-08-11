function solve(input){
    let pattern = /(?<day>[\d]{2})(\.|-|\/)(?<month>[A-Z][a-z]{2})(\2)(?<year>[\d]{4})/g;
    
    let match = pattern.exec(input);
    let result = [];
    
    while(match!== null){
        result.push(match);
        match = pattern.exec(input);
    }
    
    for(let i = 0; i<=result.length-1; i++){
        let token = result[i];
        let date = token[0]. split(token[2]);
        console.log(`Day: ${date[0]}, Month: ${date[1]}, Year: ${date[2]}`);
    }
    
    }