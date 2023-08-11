function storage(input){

    let storage = new Map();

    for(let line of input){
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity); 
        if(!storage.has(product)){
        storage.set(product, quantity);
        }else{
           let add =  storage.get(product);
           storage.set(product, quantity+add)

        }
    }
   
    
    for(let [product, quantity] of storage){
        console.log(`${product} -> ${quantity}`)
    }
}