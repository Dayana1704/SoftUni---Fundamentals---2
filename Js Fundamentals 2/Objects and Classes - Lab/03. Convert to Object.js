function convert(string){
    let converted = JSON.parse(string);
    
    let keys = Object.keys(converted);

    for(let key of keys){
        console.log(`${key}: ${converted[key]}`);

    }

}