function addresses(input){
    let object = {};

    for(let line of input){
        let [name,address] = line.split(":");
        object[name] = address;
    }

    let keys = Object.keys(object);
    let sorted = keys.sort((a,b) => a.localeCompare(b));

    for(let key of sorted){
        console.log(`${key} -> ${object[key]}`)
    }

    

}