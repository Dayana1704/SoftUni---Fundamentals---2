function solve(input){
    let pattern = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>[\d]+)\|.*?(?<price>\d+(?:\.\d+)?)\$/g;
    let sum = 0;
    for(let line of input){
        if(line == "end of shift"){
            break;
        }
    let match = pattern.exec(line);
    if(match!== null){
    let currClientPrice = Number(match.groups.count) * Number(match.groups.price);
    sum+= currClientPrice;
    console.log(`${match.groups.name}: ${match.groups.product} - ${currClientPrice.toFixed(2)}`)
    match = pattern.exec(line);
    }
    }
    console.log(`Total income: ${sum.toFixed(2)}`)
    
    }