function solve(input){
    let pattern = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+.(\d+)?)!(?<quantity>\d+)/g;
    let sum = 0;
    let result = [];
    
    let match = pattern.exec(input);
    console.log("Bought furniture: ") 
    
    while(match!== null){
        result.push(match);
        match = pattern.exec(input);
      
    }
    for(let line of result){
        console.log(`${line.groups.name}`)
        sum+=line.groups.price*line.groups.quantity;
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`)
    }